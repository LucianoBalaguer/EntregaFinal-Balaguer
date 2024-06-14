import "./ProductViewBig.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { filterProdsById } from "../../FireBase/FireBase";
import { ProductContext } from "../../context/ProductContext";
import Count from "../Count/Count";
import Swal from 'sweetalert2';

export default function ProductViewBig() {
    const { prodId } = useParams();
    const [contador, setContador]=useState(0);
    const [productView, setProductView] = useState([]);

    useEffect(() => { //puede manejar funciones ASYNC
        
        filterProdsById(prodId).then((products) => setProductView(products));

    }, [prodId]);

    console.log("Estado productView:", productView); // Depuración
    
    //verifico si productView[0] existe antes de renderizar
    if (productView.length === 0 || !productView[0]) {
        return console.log("No llega la api todavia");
    }

    const producto = productView[0]; // Accede al primer (y único) objeto en el array

    const btn = { 
        background: "red",
        color: "white",
        marginTop: "50px",
        position: "relative",
        bottom: "0px", 
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 0px)", 
        height: "50px" 
    };

    const { addProduct } = useContext(ProductContext);

    const handleClick = () => {
        // Crea el objeto del producto con la cantidad del contador
        if(contador != 0){
            const productToAdd = {
                title: producto.title,
                img: producto.img,
                price: producto.price,
                prodId,
                quantity: contador, // Añade la cantidad desde el contador
            };
            addProduct(productToAdd);
        }else{
            Swal.fire({
                title: "Debe colocar una cantidad...",
                confirmButtonText: "Entendido",
                confirmButtonColor: "red" // Cambia el color del botón si es necesario
            });
        }
        
    };

    return (
        <>
                <div className="container" style={{marginTop:100, backgroundColor:"white"}}>
    
                        <div className="row" >
                            <div className="col">
                                <img className="img-fluid" src={producto.img} alt="Producto 1" />
                            </div>

                            <div className="col">
                                <img className="img-fluid" src={producto.img} alt="Producto 2" />
                            </div>
                        </div>

                        <div className="row mt-4" >
                            <div className="col">
                                <img className="img-fluid" src={producto.img} alt="Producto 1" />
                            </div>
                            <div className="col">
                                <img className="img-fluid" src={producto.img} alt="Producto 2" />
                            </div>
                        </div>

                        <div className="row" style={{backgroundColor:"white"}} >
                            <h1>{producto.title}</h1>
                            <h3> ${producto.price} </h3>

                            <Count contador={contador} setContador={setContador} />

                            <button className="btn" onClick={handleClick} style={btn}>
                                Añadir al Carrito
                            </button>
                        </div>
                    
                </div>
        </>
    );
}