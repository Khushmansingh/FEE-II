import { useEffect, useState } from "react";

function useApi(url){

    const [data, setData] = useState(null);
    const [loading,setloading] = useState(true);

    useEffect(() => {
        setloading(true);
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setData(result);
                setloading(false);
            });
    }, [url]);

    return [data,loading];

}

export default useApi;