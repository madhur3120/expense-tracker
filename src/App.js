import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home/index";

const App = () => {
  return (
    <Router>
      <Header />

      <Route path="/" element={Home} />
      <Route path="/add-expense" element={AddExpense} />

      <Footer />
    </Router>
  );
};

export default App;