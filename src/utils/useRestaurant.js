import { useState } from "react";
import { FETCH_RESTAURANT_URL } from "../config";

const useRestaurant = (resId) =>{

    const [restaurant,setRestauraunt] = useState(null)
    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
    async function getRestaurantInfo() {
        const data = await fetch(
           + FETCH_RESTAURANT_URL + 
            id
        );
        const json = await data.json();
        // console.log(json.data);
        setRestauraunt(json.data);
    }
    return restaurant;
}

export default useRestaurant;