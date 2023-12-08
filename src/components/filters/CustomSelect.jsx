import React from "react";

export const CustomSelect = ({ dataOptions, onChangeData }) => {
    return (
        <select
            className="form-select"
            aria-label="Default select example"
            onChange={onChangeData}
        >
            <option defaultValue={true}>Selecciona una Categoria</option>
            {dataOptions.map((option) => (
                <option key={option.name} value={option.name}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};
