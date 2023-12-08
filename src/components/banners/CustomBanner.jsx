import React from "react";

export const CustomBanner = () => {
    return (
        <div className="container-fluid">
            <div
                className="row"
                style={{ justifyContent: "center", alignItems: "center" }}
            >
                <div className="col-12 p-3">
                    <div style={{ fontSize: "40px" }}>
                        Ejercicio Practico GiMoji
                    </div>
                    <div style={{ fontSize: "13px" }}>
                        Trabajamos con la ApiRest:{" "}
                        <a
                            href="https://developers.giphy.com/explorer/"
                            target="_blank"
                        >
                            GIPHY DEVELOPERS
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
