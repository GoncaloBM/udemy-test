import { useContext, useEffect, useState } from "react";
import { getScoops, getToppings } from "../api";
import { AppContext } from "../contexts/appContext";

const useOrders = () => {
    const {
        setScoops,
        setToppings,
        scoops,
        toppings
    } = useContext(AppContext);

    const [isRequesting, setIsRequesting] = useState(false);
    const [error, seterror] = useState(false);

    const fetchFlavors = async () => {
        try {
            setIsRequesting(true);
            let requests = [
                getScoops(),
                getToppings()
            ];
    
            Promise.all(requests).then(async (responses) => {
                const scoopsRsp = responses[0]?.data;
                const toppingsRsp = responses[1]?.data ;
                const newScoops = {...scoops};
                const newToppings = {...toppings};
    
                scoopsRsp.forEach(element => {
                    newScoops[element] = 0
                });
    
                toppingsRsp.forEach(element => {
                    toppings[element] = false;
                });
    
                setScoops(newScoops);
                setToppings(newToppings);
                setIsRequesting(false);
            })
        } catch (error) {
            seterror(true);
            setIsRequesting(false);
        }
    }

    useEffect(() => {
        if (!isRequesting) {
            fetchFlavors();
        } 
    }, []);

    return {
        isRequesting,
        error
    }

}

export default useOrders;