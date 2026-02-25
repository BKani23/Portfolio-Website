import "../styles/Home.css"; 


const Home = () => {
  return (
    <section
      className="home-section"
    >
      <div className="overlay"></div>

      {/* Hero content */}
      <div className="home-content">
        <h1 className="home-name">Bulelani Kani<span className="period">.</span></h1>
        <h2 className="home-title">Fullstack Software Developer</h2>
      </div>

      {/* Scroll-down indicator */}
      <div
        className="scroll-down"
        onClick={() =>
        {
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" })
        }
      }
      >
        <span></span>
      </div>
    </section>
  );
};

export default Home;