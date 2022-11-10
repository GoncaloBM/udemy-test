import { OutlinedInput } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

const ScoopOption = ({ name, imagePath }) => {
    const {
        scoops,
        updateScoopValue
    } = useContext(AppContext);

    const handleChangeScoopValue = (value) => {
        updateScoopValue(name, parseInt(value))
    }
    return (
        <div>
            <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
            <OutlinedInput value={scoops?.[name]} onChange={(e) => handleChangeScoopValue(e.target.value)} type='number' data-testid={`scoop-tota-input-${name}`}/>
        </div>
    )
}

export default ScoopOption;