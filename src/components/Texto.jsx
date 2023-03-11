import { useContext } from "react";
import { Contexto } from "../context/Contexto";

export const Texto = () => {

    const {datos} = useContext(Contexto);
    return (
        <>
            <h1 className="titulo">{datos.titulo}</h1>
            <p className="texto">{datos.texto}</p>
        </>
     );
}
 
