import { Outlet } from "react-router-dom";
import Header from "./components/Header";
//import { useState } from "react";
//import { useEffect } from "react";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}
