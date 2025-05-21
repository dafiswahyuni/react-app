import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import TopProduk from "../components/TopProduk";
import Testimoni from "../components/Testimoni";
import Footer from "../components/Footer";

export default function Guest() {
  return (
    <>
      <Hero />
      <About />
      <TopProduk />
      <Testimoni />
    </>
  );
}
