import React from "react";
import ReactDOM from "react-dom/client";

const Header =()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="http://localhost:1234//ep_4_the_code\gptImages\DALL·E_2024-01-1.png" alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>

        </ul>
      </div>
      

    </div>)
  
}
const AppLayout = () => {
  return (
  <div className="app">
  <Header />
  </div>
  )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
