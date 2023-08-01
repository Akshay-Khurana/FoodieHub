import { useState } from "react";
import { FETCH_RESTAURANT_URL } from "../config";
import { useEffect } from "react";

const useRestaurant = (id) =>{

    const [restaurant,setRestauraunt] = useState(null)
    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
    async function getRestaurantInfo() {
        const data = await fetch(FETCH_RESTAURANT_URL + id);
        console.log(data);
        const json = await data.json();
        setRestauraunt(json.data);
    }
    return restaurant;
}

export default useRestaurant;