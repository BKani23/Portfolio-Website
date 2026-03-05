import { useEffect, useRef } from "react";
import "../styles/Cursor.css";

const Cursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    let hover = false;

    // Track mouse position
    const mouseMoveHandler = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    // Smooth follow loop
    const loop = () => {
      if (!hover) {
        posX += (mouseX - posX) * 0.15; // easing
        posY += (mouseY - posY) * 0.15;
        cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(loop);
    };
    loop();

    // Hover effects for elements with [data-cursor]
    const attachHover = (el) => {
      el.addEventListener("mouseover", () => {
        const type = el.dataset.cursor;
        if (type === "icons") {
          cursor.classList.add("cursor-icons");
          hover = true;
        }
        if (type === "disable") {
          cursor.classList.add("cursor-disable");
          hover = true;
        }
      });
      el.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-icons", "cursor-disable");
        hover = false;
      });
    };

    // attach to existing elements
    document.querySelectorAll("[data-cursor]").forEach(attachHover);

    // observe new elements added dynamically
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && node.dataset.cursor) attachHover(node);
          node.querySelectorAll?.("[data-cursor]").forEach(attachHover);
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // cleanup
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      cancelAnimationFrame(requestRef.current);
      observer.disconnect();
    };

  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
