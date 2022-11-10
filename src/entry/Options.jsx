import { Alert } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/appContext";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

const Options = ({ options, error }) => {

  const {
    scoopSubTotal,
    tppingTotal,
    scoops,
    toppings
  } = useContext(AppContext)
  const items = options === 'scoops' ? scoops : toppings;

  const ItemComponent = options === 'scoops' ? ScoopOption : ToppingOption;
  let itemTotal;
  if (!error) {
    itemTotal = options === 'scoops' ? scoopSubTotal() : tppingTotal();
  }


  const optionItems = items.map(item =>
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />);
  return (
    <div>
      {error ? <Alert severity="error" data-testid='alert-error'>Error ocurred!</Alert> : optionItems}
      {!error && <div>
        {options} total: {itemTotal}
      </div>}
    </div>
  )
}

export default Options;