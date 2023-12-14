import { useState } from "react";

export default function usePaginate(initialOffset, limit, initialPage) {
    const [offset, setOffset] = useState(initialOffset);
    const [page, setPage] = useState(initialPage);

    const onNext = () => {
        setOffset((prev) => prev + limit);
        setPage(page + 1);
    };

    const onPrev = () => {
        setOffset((prev) => {
            if (prev === 0) {
                setPage(initialPage);
                return 0;
            } else {
                setPage(page - 1);
                return prev - limit;
            }
        });
    };

    const restartOffsetAndPage = () => {
        setOffset(initialOffset);
        setPage(initialPage);
    };
    return {
        offset,
        page,
        onNext,
        onPrev,
        limit,
        restartOffsetAndPage,
    };
}
