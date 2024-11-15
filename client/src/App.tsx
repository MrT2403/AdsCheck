import React from "react";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Pricing } from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
