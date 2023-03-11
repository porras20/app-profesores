import { useContext } from "react";
import { Contexto } from "../context/Contexto";

export const Pagina3 = () => {
    
    const {color} = useContext(Contexto)

    return ( 
        <div className="hijo" style={{background: color}}>
        Pagina3</div>
     );
}
 
