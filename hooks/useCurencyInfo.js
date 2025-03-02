import { useEffect, useState } from "react";
function useCurrencyInfo(currency){
    const[data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency])) //currency ki jo value hai wo set ho jayegi (yani inr, usd, etc.)
    }, [currency]);
    return data
}
export default useCurrencyInfo;