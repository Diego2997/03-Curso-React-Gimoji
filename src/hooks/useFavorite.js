import { useState } from "react";

export default function useFavorite() {
    const [favorite, setFavorite] = useState(false);
    const onClickFavorite = () => {
        setFavorite(!favorite);
    };
    return {
        favorite,
        onClickFavorite,
    };
}
