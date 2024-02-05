import React from "react";
import "./fonts/font.css";
import "./reset.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import HomePage from './Components/HomePage'; 

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
      
    </div>
  );
}

export default App;
