import { useContext } from "react"
import { OrderPhase } from "../../contants"
import { AppContext } from "../../contexts/appContext"
import OrderEntry from "../../entry/OrderEntry"
import Confirmation from "./Confirmation"
import SummaryForm from "./SummaryForm"

const Page = () => {

    const {
        orderPhase
    } = useContext(AppContext);

    switch (orderPhase) {
        case OrderPhase.FLAVOR:
            return <OrderEntry />;
        case OrderPhase.SUMMARY:
            return <SummaryForm />
        case OrderPhase.CONFIRMATION:
            return <Confirmation />;
        default:
            return <OrderEntry />;

    }
}

export default Page;