import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo } = resData?.info;
  return (
    <div
      className="m-4 p-4 w-[250px] text-center
     bg-slate-100 hover:bg-slate-200 "
    >
      <img
        className="rounded-lg object-fill h-56 w-full"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-medium py-2 text-lg truncate ">{name}</h3>
      <h4 className="truncate">{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label
          htmlFor=""
          className="absolute  bg-black text-white p-2  mx-4 rounded-lg"
        >
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
