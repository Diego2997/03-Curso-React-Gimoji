import { CustomGifcard } from "./components/ui/CustomGifcard";
import { CustomSearch } from "./components/filters/CustomSearch";
import { CustomSelect } from "./components/filters/CustomSelect";
import { useState } from "react";
import { useAxios } from "./hooks/useAxios";
import { Loading } from "./components/ui/Loading";

export const Gimoji = () => {
    const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
    const urlApi = "https://api.giphy.com/v1/gifs";
    // const [dataGimoji, setDataGimoji] = useState([]);
    // const [dataCategories, setDataCategories] = useState([]);
    const [textSearch, setTextSearch] = useState("animals");

    const limit = 16;
    const urlSearch = `/search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`;
    const urlCategories = `${urlApi}/categories?api_key=${apiKey}`;
    const { dataApi, isLoading } = useAxios(urlSearch);
    const { dataApi: dataCategories } = useAxios(urlCategories);

    // useEffect(() => {}, [textSearch]);

    // const getGimoji = async () => {
    //     // const resp = await fetch(
    //     //     `${urlApi}/search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`
    //     // );
    //     // const { data } = await resp.json();
    //     // setDataGimoji(data);
    //     //AXIOS
    //     const resp = await reqAxios.get(
    //         `/search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`
    //     );
    //     const { data } = await resp.data;
    //     setDataGimoji(data);
    // };

    // useEffect(() => {
    //     getCategories();
    // }, []);

    // const getCategories = async () => {
    //     const resp = await fetch(`${urlApi}/categories?api_key=${apiKey}`);
    //     const { data } = await resp.json();
    //     setDataCategories(data);
    // };

    const onChangeData = (e) => {
        setTextSearch(e.target.value);
    };

    const onClickSearch = (text) => {
        setTextSearch(text);
    };

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row justify-content-start">
                    <div className="col-sm-4">
                        <CustomSelect
                            dataOptions={dataCategories}
                            onChangeData={onChangeData}
                        />
                    </div>
                    <div className="col-sm-6">
                        <CustomSearch onClickSearch={onClickSearch} />
                    </div>
                </div>
            </div>

            <div className="album py-md-5 ">
                <div className="container-fluid">
                    <div className="row row-cols-sm-1 row-cols-md-4 g-3">
                        {dataApi.map((gif) => (
                            <CustomGifcard key={gif.id} dataItem={gif} />
                        ))}
                    </div>
                    <div className="row mt-5">
                        <button
                            className="btn btn-outline-primary btn-lg"
                            onClick={() => {}}
                        >
                            CARGAR MAS
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
