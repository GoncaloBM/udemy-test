import { Button, Checkbox, FormControlLabel, FormGroup, Tooltip } from "@mui/material";
import { useState } from "react";

const SummaryForm = () => {
    const [checked, setChecked] = useState(false);

    const label = <span>
        Check terms <Tooltip  title={<span data-testid='terms-popover-id'>
            there is no terms
        </span>}>
            <span data-testid='terms-text-id'>here</span>
        </Tooltip>
    </span>

    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox value={checked} onChange={(e) => setChecked(e.target.checked)}/>} label={label}/>
            <Button variant='primary' disabled={!checked} type='submit'>
                Submit Form
            </Button>
        </FormGroup>
    )
}

export default SummaryForm;