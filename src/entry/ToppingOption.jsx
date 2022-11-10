import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

const ToppingOption = ({ name, imagePath }) => {

    const {
        updateToppingTotal
    } = useContext(AppContext);

    const handleChange = (value) => {
        updateToppingTotal(name,value)
    }
    return (
        <div>
            <img src={imagePath} alt={`${name} topping`} />
            <FormGroup>
                <FormControlLabel control={<Checkbox  inputProps={{'data-testid':`${name} Topping`}} onChange={(e) => handleChange(e.target.checked)}/>} label={`${name} Topping`} />
            </FormGroup>
        </div>
    )
}

export default ToppingOption;