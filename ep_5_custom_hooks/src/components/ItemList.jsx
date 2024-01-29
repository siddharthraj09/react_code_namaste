import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action

    return dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="px-2 py-6 m-2 text-left  border-gray-200 border-b-2  flex justify-between"
          >
            <div className=" w-9/12 ">
              <div className="py-2 flex flex-col ">
                <span>{item?.card?.info?.name}</span>
                <span className="text-sm">
                  ₹
                  {item?.card?.info?.defaultPrice
                    ? item?.card?.info?.defaultPrice / 100
                    : item?.card?.info?.price / 100}
                </span>
              </div>
              <p className="text-xs text-neutral-500">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12 p-2 relative">
              <img
                className="rounded-lg object-fill  w-full"
                src={CDN_URL + item?.card?.info?.imageId}
                alt="items-logo"
              />
              <button
                className="p-2 text-sm bg-black text-white shadow-lg rounded-lg  absolute bottom-2 left-1/2 transform -translate-x-1/2 "
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
