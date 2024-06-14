import "./NavBar.css"
import Titulo from "./Titulo"
import Sections from "../Sections/Sections"
import CartWidget from "../CartWidget/CartWidget"

export default function NavBar(){
    return (
        <> 
        <div className="container-fluid">
        <div  className="row">
            <div className="col-2 ms-3 mt-3">
                <Titulo/>
            </div>
        
            <div className="col">
                <Sections nombre1="Hombre" nombre2="Mujer" nombre3=""/>
            </div>

            
            <div className="col me-5 mt-1">
                <div className="cart-container">
                    <CartWidget/>   
                </div>
            </div>
            

        </div>
        </div>
        </> 
    )
}