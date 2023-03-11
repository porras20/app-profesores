import { useContext, useState } from "react";
import { Contexto } from "../context/Contexto";


export const Footer = () => {
    const [ocultarLugar , setOcultarLugar] = useState(false);
    const [ocultarProfe , setOcultarProfe] = useState(false);
    const { datos } = useContext(Contexto);

    const mostrar = (mostrar, ocultar) =>{
        mostrar(true)
        ocultar(false)
    }
    return (
      <>
        <div className="botones">
          <button onClick={() => mostrar(setOcultarProfe, setOcultarLugar)}>
            {datos.boton1}
          </button>
          <button onClick={() => mostrar(setOcultarLugar, setOcultarProfe)}>
            {datos.boton2}
          </button>
        </div>
        {ocultarProfe ? (
          <div className="profesora">
            <h2>{datos.boton1}</h2>
            <img src={`../${datos.foto}`} alt="" />
            <p>{datos.nombre}</p>
          </div>
        ) : null}

        {ocultarLugar ? (
          <div className="lugar">
            <h2>{datos.boton2}</h2>
            <p>{datos.direccion}</p>
          </div>
        ) : null}
      </>
    );
}
 
