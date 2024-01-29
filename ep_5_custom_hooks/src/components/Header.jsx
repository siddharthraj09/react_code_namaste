import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, SetBtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  //Selector , subscribing tto the store using a Selector
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-50 sm:bg-yellow-200 shadow-sm mx-auto  lg:bg-green-50">
      <div className="logo-container ">
        <img className="w-56 rounded-full p-2 m-2" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4  m-4 ">
          <li className="px-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact"> Contact</Link>
          </li>
          <li className="px-4">Cart ({cartItems.length})</li>
          <button
            className="px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? SetBtnNameReact("Logout")
                : SetBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className=" font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
