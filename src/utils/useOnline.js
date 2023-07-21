import { useEffect, useState } from "react";

const useOnline = () => {
    const [online,setOnline] = useState(true);

    const handleOnline = () =>{
        setOnline(true);
    }

    const handleOffline = ()=> {
        setOnline(false);
    }

    useEffect(()=>{
        window.addEventListener('online', handleOnline
        )
        window.addEventListener('offline', handleOffline)
        return ()=>{
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        } // best to remove the listeners 
        // functionality same as componentwillUnmount in Class Component
    },[]);

    return online;

}

export default useOnline;