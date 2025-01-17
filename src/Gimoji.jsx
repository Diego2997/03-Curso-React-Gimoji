import { CustomGifcard } from "./components/ui/CustomGifcard";
import { CustomSearch } from "./components/filters/CustomSearch";
import { CustomSelect } from "./components/filters/CustomSelect";
import { useState } from "react";
import { useAxios } from "./hooks/useAxios";
import { Loading } from "./components/ui/Loading";
import usePaginate from "./hooks/usePaginate";

export const Gimoji = () => {
    const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
    const urlApi = "https://api.giphy.com/v1/gifs";
    // const [dataGimoji, setDataGimoji] = useState([]);
    // const [dataCategories, setDataCategories] = useState([]);
    const [textSearch, setTextSearch] = useState("animals");

    const limit = 16;
    const initialOffset = 0;
    const initialPage = 1;
    const { offset, page, restartOffsetAndPage, onNext, onPrev } = usePaginate(
        initialOffset,
        limit,
        initialPage
    );
    const urlSearch = `/search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=${offset}`;
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
        restartOffsetAndPage();
    };

    const onClickSearch = (text) => {
        setTextSearch(text);
        restartOffsetAndPage();
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
                    <div className=" mt-5 d-flex text-center ">
                        <button
                            className="btn btn-outline-primary btn-lg"
                            onClick={onPrev}
                        >
                            Anterior
                        </button>
                        <h3>Pagina {page}</h3>
                        <button
                            className="btn btn-outline-primary btn-lg"
                            onClick={onNext}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
