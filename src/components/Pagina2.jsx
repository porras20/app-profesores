import { useContext } from "react";
import { Contexto } from "../context/Contexto";

export const Pagina2 = () => {
    
    const {color} = useContext(Contexto)

    return ( 
        <div className="hijo" style={{background: color}}>
        Pagina2</div>
     );
}
 
