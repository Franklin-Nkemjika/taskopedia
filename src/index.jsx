import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import MainBody from "./component/MainBody";
import 'bootstrap/dist/css/bootstrap.css';
import "./CSS/style.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="mainDev"> 
    <Header />
    <div className="px-4"><MainBody /></div>
    <Footer />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
