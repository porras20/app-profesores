import { createContext, useState } from "react";

export const Contexto = createContext()

export const Datos = ({children}) => {
    const[color, setColor] = useState("silver");
    const[datos, setDatos] = useState(
        {
            titulo:"Aprenda React intensivamente con una profesora nativa",
            texto:"2 semanas. Una profesora sólo para ti (12h/día)",
            boton1:"Profesora",
            foto:"marta.PNG",
            nombre:"Marta Ríos",
            boton2:"Lugar",
            direccion:"48 St Laurent Boulevard, Montreal, Canadá"
        }
    )

    return(
        <Contexto.Provider value={{datos , setDatos}}>
            { children }
        </Contexto.Provider>
    )
}
 
