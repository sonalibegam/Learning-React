import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((err) => console.error("Fetch error:", err));
    }, [currency]);

    useEffect(() => {
        console.log("Updated data:", data);
    }, [data]);

    return data;
}

export default useCurrencyInfo;
