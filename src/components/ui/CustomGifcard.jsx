import React from "react";
import { useState } from "react";
import useLike from "../../hooks/useLike";
import useFavorite from "../../hooks/useFavorite";

const noImage = import.meta.env.VITE_NO_IMAGE;

export const CustomGifcard = ({ dataItem }) => {
    const { likes, onClickLike } = useLike();
    const { favorite, onClickFavorite } = useFavorite();

    return (
        <div className="col">
            <div className="card shadow-sm">
                <img
                    src={dataItem.images.fixed_width.url}
                    alt="Girl in a jacket"
                    width={"100%"}
                    height={300}
                    style={{ display: "block" }}
                />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                onClick={onClickLike}
                                type="button"
                                className="btn btn-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-hand-thumbs-up-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                </svg>
                                <div>{likes}</div>
                            </button>

                            <button
                                onClick={onClickFavorite}
                                type="button"
                                className="btn btn-sm btn-secondary"
                            >
                                {favorite ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-heart-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-heart"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <small className="text-body-secondary">
                            cod: {dataItem.id.substr(0, 5)}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};
