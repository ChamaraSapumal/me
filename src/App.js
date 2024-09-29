import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from "./components/ScrollToTop";
import RateMyWork from "./components/RateMyWork";
import Testimonials from "./components/Testimonials";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 200);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen fadeOut={fadeOut} />
      ) : (
        <>
          <div className="navbar-container visible">
            <Navbar />
          </div>
          <div id="hero-section">
            <Hero />
          </div>
          <About />
          <Expertise />
          <Projects />
          <Testimonials />
          <RateMyWork />
          <Contact />
          <Footer />
        </>
      )}
      <ScrollToTop />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0.5}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
        outerStyle={{
          border: "3px solid rgba(255, 255, 255, 0.5)",
          mixBlendMode: "difference",
        }}
      />
    </div>
  );
}

export default App;
