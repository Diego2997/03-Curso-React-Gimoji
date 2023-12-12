import { useEffect, useState } from "react";
import axios from "axios";

const urlApi = import.meta.env.VITE_URL_API;

const reqAxiosHook = axios.create({
    baseURL: urlApi,
    timeout: 12000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const useAxios = (url, method, params) => {
    const [dataApi, setDataApi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getFetch();
    }, [url]);

    const getFetch = async () => {
        const resp = await reqAxiosHook({
            url,
            method: method,
            params: { params },
        });
        const { data } = await resp.data;
        setDataApi(data);
        setIsLoading(false);
    };

    return {
        dataApi,
        isLoading,
    };
};
