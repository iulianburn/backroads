import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

function App() {
  return (<>
    <Navbar />
    <Hero />
    <Services />
    <Tours/>
    <About/>
    <Footer/>
 </>  );
  
}

export default App;
