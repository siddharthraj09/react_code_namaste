import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="  bg-gray-50 shadow-lg p-6 mx-auto my-2">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold ">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span className="font-bold w-4 ">{showItems ? "˄" : "˅"} </span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
