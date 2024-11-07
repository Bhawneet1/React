import { useEffect,useState } from "react";
//custom hook

function useCurrencyInfo (currency){
  useEffect(()=>{
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency.json')
  },[currency])
}