import { IMG_CDN_URL } from "../config";

const FoodItem = ({name,imageId,price,description}) => {
    return <div className="w-56 p-2 bg-white hover:bg-white hover:scale-90 hover:transition-all hover:shadow-xl m-2 rounded-md">
    <img src = {IMG_CDN_URL+imageId} alt = "null"/>
    <h2 className="font-bold mt-2"> {name}</h2>
    <p className="font-bold"> Rs. {price/100}</p>
    <p className="font-medium"> {description} </p>
</div>
}

export default FoodItem;