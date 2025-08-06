import { logo } from "./assets";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loadingContainer">
        <div className="loadingIcon mb-4">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>
        <div className="spinner"></div>
        <p>Loading website...</p>
      </div>
    );
  }
  return (
    <>
      <div className="w-full h-auto bg-gray-900 text-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <Banner />
          <Features />
          <Projects />
          <Resume />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
