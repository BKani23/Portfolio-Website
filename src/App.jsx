import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import SocialIcons from "./components/SocialIcons";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loading onFinish={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <Header />
          <Home />
          <About />
          <SocialIcons />
        </>
      )}
    </>
  );
}

export default App;