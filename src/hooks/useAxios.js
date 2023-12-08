import { useEffect, useState } from "react";
import { reqAxios } from "../config/axiosGiphy";

export const useAxios = (url) => {
    const [dataApi, setDataApi] = useState([]);

    useEffect(() => {
        getFetch();
    }, [url]);

    const getFetch = async () => {
        const resp = await reqAxios.get(url);
        const { data } = await resp.data;
        setDataApi(data);
    };

    return {
        dataApi,
    };
};
