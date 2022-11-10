import { createContext, useState } from "react";
import { OrderPhase, PRICE_PER_SCOOP, PRICE_PER_TOPPING } from "../contants";

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
    const [orderPhase, setOrderPhase] = useState(OrderPhase.FLAVOR);
    const [scoops, setScoops] = useState({});
    const [toppings, setToppings] = useState({});
    const [total, setTotal] = useState(0);

    const updateScoopValue = (itemName, itemCount) => {
        const newScoops = { ...scoops };
        newScoops[itemName] = itemCount;
        setScoops(newScoops);
    }

    const updateToppingTotal = (itemName, itemValue) => {
        const newToppings = { ...toppings };
        newToppings[itemName] = itemValue;
        setToppings(newToppings);
    }

    const scoopSubTotal = () => {
        const quantities = Object.values(scoops);
        const total = quantities?.reduce((accumulator, currentValue) => accumulator + currentValue * PRICE_PER_SCOOP);
        return total;
    }

    const tppingTotal = () => {
        const qant = Object.values(toppings);
        const total = qant.filter(topping => !!topping);
        return total.length * PRICE_PER_TOPPING
        }

    const contextValues = {
        scoops,
        setScoops,
        total,
        setTotal,
        updateScoopValue,
        scoopSubTotal,
        updateToppingTotal,
        tppingTotal,
        orderPhase,
        setOrderPhase,
        toppings, setToppings
    }
    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }