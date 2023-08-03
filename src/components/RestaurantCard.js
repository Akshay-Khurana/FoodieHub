import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({name,cuisines,avgRating,cloudinaryImageId}) => {
    return (
        <div className="w-56 p-2 bg-white hover:bg-white hover:scale-90 hover:transition-all hover:shadow-xl m-2 rounded-md">
            <img src = {IMG_CDN_URL+cloudinaryImageId} alt = "null"/>
            <h2 className="font-bold mt-2"> {name}</h2>
            <h3 className="font-medium">{cuisines?.join(", ")}</h3>
            <h4 className="font-normal">{`${avgRating} Stars`}</h4>
        </div>
    )
}

export default RestaurantCard;