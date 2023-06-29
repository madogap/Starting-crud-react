import React from "react";
export default function ListaContactos({ listaContactos }) {
    return (
        <>
            <ul>
                {listaContactos.map((contacto, index) => {
                    return <li key={index}>
                        <p>{contacto.name}</p>
                        <p>{contacto.telefone}</p>
                    </li>;
                })}
            </ul>
        </>
    );

}