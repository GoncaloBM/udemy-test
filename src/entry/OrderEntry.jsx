import { useContext } from "react";
import { AppContext } from "../contexts/appContext";
import useOrders from "../hooks/useOrders";
import Options from "./Options";
import { isDefined } from '../utils';

const OrderEntry = () => {
    const {
        scoops,
        toppings
    } = useContext(AppContext);

    const { isRequesting, error } = useOrders();

    return (
        <div>
            <div>
                Flavor Page
            </div>
            {/* {(isDefined(scoops) && isDefined(toppings)) &&
                <>
                    <Options options={'scoops'} error={error} />
                    <Options options={'toppings'} error={error} />
                </>
            } */}
        </div>
    )
}

export default OrderEntry;