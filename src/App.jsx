import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import SocialSection from "./components/SocialSection";
import Loading from "./components/Loading";
import Cursor from "./components/Cursor";

function App() {
  
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loading onFinish={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <Header />
          <Cursor/>
          <Home />
          <About />
          <SocialSection />
        
        </>
      )}
    </>
  );
}

export default App;