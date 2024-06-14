import { AddOrder } from "../../FireBase/FireBase";
import { useState, useEffect } from "react";

//SweetAlert
import Swal from 'sweetalert2';

export default function CheckoutForm() {
    const [orderId, setOrderId] = useState(null);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');

    const style = {
        color: "white",
        fontSize: "35px",
        marginTop: "30px"
    };

    const handleSubmit = async () => {

        // Verificar que todos los campos están completos
        if (!name || !phone || !email || !email2) {
            Swal.fire({
                title: "Debe completar todos los campos",
                confirmButtonText: "Entendido",
                confirmButtonColor: "red"
            });
            return;
        }

         // Verificar que los correos electrónicos coincidan
         if (email !== email2) {
            Swal.fire({
                title: "Los correos electrónicos deben coincidir",
                confirmButtonText: "Entendido",
                confirmButtonColor: "red"
            });
            return;
        }

        // Obtener los productos del localStorage
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Log para ver el contenido del carrito
        console.log("Carrito:", cart);

        // Verificar que el carrito no está vacío
        if (cart.length === 0) {
            Swal.fire({
                title: "El carrito esta vacio",
                confirmButtonText: "Entendido",
                confirmButtonColor: "red"
            });
            return;
        }

        // Formatear los items del carrito
        const items = cart.map(product => {

            if (!product.prodId || !product.title || !product.price || !product.quantity) { //! sirve para saber si estan vacios
                console.error('Producto con datos inválidos:', product);
                alert('Error en los datos del producto');
                throw new Error('Invalid product data');
            }
            return {
                id: product.prodId,
                title: product.title,
                price: product.price
            };

        });

        // Calcular el total
        const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

        // Crear el objeto con el formato especificado
        const newOrder = {
            buyer: {
                name,
                phone,
                email
            },
            items,
            total
        };

        console.log(name);
        console.log(phone);
        console.log(email);

        AddOrder(newOrder).then((id) => setOrderId(id));
    };

    useEffect(() => {
        if (orderId) {
            Swal.fire({
                title: `Nueva orden de pedido generada id: ${orderId}`,
                confirmButtonText: "Entendido",
                confirmButtonColor: "red"
            });
        }
    }, [orderId]);

    return (
        <>  
            <div className="col">
                <h1 style={{ color: "white", fontSize: "50px" }}>Complete con sus datos para continuar</h1>
                <h2 style={style}>Nombre</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                
                <h2 style={style}>Teléfono</h2>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                
                <h2 style={style}>Email</h2>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                <h2 style={style}>Repetir Email</h2>
                <input type="text" value={email2} onChange={(e) => setEmail2(e.target.value)} />
            </div>
            

            <button onClick={handleSubmit} style={{marginTop:50}}>Comprar</button>
            <div style={{backgroundColor:"black", color: "white", marginTop:"10px"}}>
                {orderId && <h1> ultimo ID de orden: {orderId}</h1>}
            </div>
            
        </>
    );
}
 