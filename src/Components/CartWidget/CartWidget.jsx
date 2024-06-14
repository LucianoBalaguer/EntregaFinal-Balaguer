import "./CartWidget.css";
import Swal from 'sweetalert2';
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom"; 

export default function CartWidget() {

    const generarHTML = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        let html = "<ul style='list-style-type: none; padding: 0;'>";
        cart.forEach((product) => {
            html += `
                <li style="margin-bottom: 10px;">
                    <img src="${product.img}" alt="${product.title}" style="width: 50px; height: 50px; vertical-align: middle;" />
                    <span style="margin-left: 10px;">${product.title} - $${product.price} - cantidad: ${product.quantity}</span>
                </li>
            `;
        });
        html += "</ul>";
    
        return html;
    };

    const { deleteAllProducts } = useContext(ProductContext);

    const navigate = useNavigate();

    const handleClick = () => {
        Swal.fire({
            position: "top-end",
            title: "Carrito",
            html: generarHTML(),
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Comprar",
            denyButtonText: `Vaciar Carrito`,
            confirmButtonColor: "red",
            denyButtonColor: "black",
        }).then((result) => {
            if (result.isDenied) {
                deleteAllProducts(); // Llama a la función para vaciar el carrito
            } else if (result.isConfirmed) {
                // Navega al componente Checkout
                navigate("/checkout");
            }
        });
    };

    return (
        <>
            <div onClick={handleClick} style={{ cursor: "pointer" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
            </div>
        </>
    );
}
