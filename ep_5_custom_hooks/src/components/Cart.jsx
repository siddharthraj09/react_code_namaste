import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const dispatch = useDispatch();
  const handleClearCart = () => {
    return dispatch(clearCart());
  };
  return (
    <div className=" text-center  p-4 w-9/12 m-auto">
      <h1 className="text-xl font-bold">Cart</h1>
      <div className=" ">
        <div className="text-right ">
          <button
            className="p-2 my-2 mx-5 bg-black text-white rounded-lg top-0 right-0 "
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add items to the cart</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
