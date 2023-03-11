import spain from '../data/spain.jpg'
import francia from '../data/francia.png'
import uk from '../data/uk.png'
import { useContext } from 'react'
import { Contexto } from '../context/Contexto'


export const Banderas = ({valores}) => {
    const {setDatos} = useContext(Contexto);
    const changeInfo = (indice) =>{
       setDatos({
        titulo: valores[indice].titulo,
        texto: valores[indice].texto,
        boton1: valores[indice].boton1,
        nombre: valores[indice].nombre,
        foto: valores[indice].foto,
        boton2: valores[indice].boton2,
        direccion: valores[indice].direccion
       })
    }
    return ( 
        <div className="banderas">
                <img src={spain} alt="" onClick={() => changeInfo(0)}/>
                <img src={francia} alt="" onClick={() => changeInfo(2)}/>
                <img src={uk} alt="" onClick={() => changeInfo(1)}/>
        </div>
     );
}
 
