import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen"; // Import LoadingScreen
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // State for navbar visibility
  const [inHeroSection, setInHeroSection] = useState(true); // State to track if in Hero section

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out transition
      setTimeout(() => setLoading(false), 200); // Wait for fade-out effect before hiding
    }, 3000); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);

  // Handle mouse movement to show/hide navbar
  useEffect(() => {
    const handleMouseMove = () => {
      setShowNavbar(true);
    };

    let timeoutId;
    const handleHideNavbar = () => {
      if (!inHeroSection) {
        // Only hide navbar when NOT in the Hero section
        timeoutId = setTimeout(() => setShowNavbar(false), 5000); // Hide navbar after 3 seconds of no mouse movement
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleHideNavbar); // Trigger hiding after mouse stops moving

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleHideNavbar);
      clearTimeout(timeoutId);
    };
  }, [inHeroSection]);

  // Detect when leaving Hero section
  const handleScroll = () => {
    const heroElement = document.getElementById("hero-section");
    const rect = heroElement.getBoundingClientRect();
    const isInHero = rect.bottom > 0 && rect.top <= window.innerHeight;

    // Set the state to show/hide the navbar depending on if the user is in the Hero section
    setInHeroSection(isInHero);

    // Ensure the navbar is always visible in the Hero section
    if (isInHero) {
      setShowNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen fadeOut={fadeOut} /> // Pass fadeOut state
      ) : (
        <>
          {/* Navbar visibility controlled by mouse movement, always visible in Hero */}
          <div
            className={`navbar-container ${showNavbar ? "visible" : "hidden"}`}
          >
            <Navbar />
          </div>
          <div id="hero-section">
            <Hero />
          </div>
          <About />
          <Expertise />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}

      {/* Animated Cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0.5} // Adjust this value to make the outer cursor visible
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Light color for visibility
        }}
        outerStyle={{
          border: "3px solid rgba(255, 255, 255, 0.5)", // Light border color for the outer cursor
          mixBlendMode: "difference", // This will help it blend with the background
        }}
      />
    </div>
  );
}

export default App;
