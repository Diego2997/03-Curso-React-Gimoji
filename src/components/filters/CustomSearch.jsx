import React, { useState } from "react";

export const CustomSearch = ({ onClickSearch }) => {
    const [dataTest, setDataTest] = useState("");
    const onChangeSearch = (e) => {
        setDataTest(e.target.value);
    };
    return (
        <div className="row">
            <div className="col-md-10">
                <input
                    type="search"
                    className=" form-control input-lg"
                    placeholder="Search..."
                    aria-label="Search"
                    value={dataTest}
                    onChange={onChangeSearch}
                />
            </div>
            <div className="col-md-2">
                <button
                    onClick={() => onClickSearch(dataTest)}
                    className="btn btn-md btn-primary"
                >
                    BUSCAR
                </button>
            </div>
        </div>
    );
};
