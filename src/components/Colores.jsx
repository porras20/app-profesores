import { useContext } from "react";
import { Contexto } from "../context/Contexto";

export const Colores = () => {

    const { setColor } = useContext(Contexto);
    return ( 
        <div className="colores">
            <div 
            className="color" 
            onClick={() => setColor('#4285f4')}>
            </div>
            <div 
            className="color" 
            onClick={() => setColor('#ea4335')}>
            </div>
            <div 
            className="color" 
            onClick={() => setColor('#fbbc05')}>
            </div>
            <div 
            className="color" 
            onClick={() => setColor('#35a853')}>
            </div>
        </div>
     );
}
 
export default Colores;