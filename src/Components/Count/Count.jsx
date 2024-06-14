import React from "react";

export default function Count({ contador, setContador }) {
    function handleClickSuma() {
        setContador(contador + 1);
    }

    function handleClickResta() {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <button onClick={handleClickResta}>-</button>
            <p>{contador}</p>
            <button onClick={handleClickSuma}>+</button>
        </>
    );
}
