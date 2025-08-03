import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import VolunteerForm from "./components/VolunteerForm";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <Home />
      <About />
      <VolunteerForm />
      <Footer />
    </div>
  );
}
