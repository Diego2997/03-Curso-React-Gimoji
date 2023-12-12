import React, { useState } from "react";

export default function useLike() {
    const [likes, setLikes] = useState(0);

    const onClickLike = () => {
        setLikes((previusState) => previusState + 1);
    };
    return { likes, onClickLike };
}
