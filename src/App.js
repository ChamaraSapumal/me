// src/App.js
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out transition
      setTimeout(() => setLoading(false), 500); // Wait for fade-out effect before hiding
    }, 3000); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen fadeOut={fadeOut} /> // Pass fadeOut state
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Expertise />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}

      {/* Animated Cursor */}
      {/* <AnimatedCursor
        color="255,255,255" // Update the color format to RGB values
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.8} // Increase alpha for better visibility
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
      /> */}

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
