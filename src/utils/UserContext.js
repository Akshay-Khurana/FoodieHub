import { createContext } from "react";

const UserContext = createContext({
    user : {
        name : "Akshay Khurana",
        email : "akshaykhurana9002@gmail.com",
    }
});

export default UserContext;