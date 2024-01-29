import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [showItems, setShowItems] = useState(false);
  // const handleClick = () => {
  //   // showItems === false ? setShowItems(true) : setShowItems(false);
  //   setShowItems(!showItems);
  // };

  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  // const { carousel, itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  const handleSetShowIndex = (index) => {
    // Toggle the accordion: if the index is the same as the current showIndex, reset it to null
    setShowIndex(showIndex === index ? null : index);
  };

  // console.log(categories);
  return (
    <div className=" w-9/12  text-left mx-auto">
      <h1 className="font-bold my-6 text-lg">{name} </h1>
      <p className=" text-md">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => {
        //controlled component
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => handleSetShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
