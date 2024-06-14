import "./Sections.css"
import { Link } from "react-router-dom";

export default function Sections({nombre1,nombre2,nombre3}){

    const style={
        color: "#8b0000",
        textDecoration: "none",
    }
    
    function handleClick(nombre){
        console.log(`Ingresaste a la seccion ${nombre}`);
    }
    
        return(
            <>
               <div className="container mt-Personalizado1">
    
                    <div style={{width: 1000}} className="row d-flex justify-content-center">
    
                        <div className="col-4 tipografia2" style={{marginTop: 7, marginLeft:50, color: "#8b0000"}} onClick={() => handleClick(nombre1)}>
                            <Link to={"Sections/Hombre"} style={style}> <h3>{nombre1}</h3> </Link>
                        </div>
    
                        <div className="col-2 tipografia2" style={{marginTop: 7, marginLeft:0, color: "#8b0000"}} onClick={() => handleClick(nombre2)}>
                            <Link to= {"Sections/Mujer"} style={style}> <h3>{nombre2}</h3> </Link> 
                        </div>
    
                        <div className="col-3 tipografia2" style={{marginTop: 7, marginLeft:160, color: "#8b0000"}} onClick={() => handleClick(nombre3)}>
                            <Link to={"/Sections/Economic"} style={style}> <h3>{nombre3}</h3> </Link>
                        </div>
                    </div>
    
                </div>
            </>
        )
    
    

}

