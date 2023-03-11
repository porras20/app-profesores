import { useContext } from "react";
import { Contexto } from "../context/Contexto";

export const Pagina1 = () => {
    
    const {color} = useContext(Contexto)

    return ( 
        <div className="hijo" style={{background: color}}>
        Pagina1</div>
     );
}
 
