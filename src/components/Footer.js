import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Footer = () => {
    const {user} = useContext(UserContext);
    return <div className="bg-black flex h-12 justify-center items-center">
        <p className="text-white">This App is developed by {user.name} </p>
    </div>;
};

export default Footer;