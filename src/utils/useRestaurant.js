import { useState } from "react";

const useRestaurant = (resId) =>{

    const [restaurant,setRestauraunt] = useState(null)
    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
    async function getRestaurantInfo() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.591945&lng=73.73897649999999&restaurantId=" +
            id
        );
        const json = await data.json();
        // console.log(json.data);
        setRestauraunt(json.data);
    }
    return restaurant;
}

export default useRestaurant;