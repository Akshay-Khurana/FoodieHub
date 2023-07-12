import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({name,cuisines,sla,cloudinaryImageId}) => {
    return (
        <div className="card">
            <img src = {IMG_CDN_URL+cloudinaryImageId} alt = "null"/>
            <h2> {name}</h2>
            <p> {cuisines.join(",")}</p>
            <h4> {sla.deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;