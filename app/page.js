import React from "react";
import { Navbar } from "./components/ui/Navbar";
import Herosection from "./components/ui/Herosection";
import About from "./components/ui/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <About/>
    </>
  );
};

export default Home;
