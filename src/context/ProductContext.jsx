import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addProduct = (newProduct) => {
        const existingProduct = cart.find((product) => product.prodId === newProduct.prodId);

        if (existingProduct) {
            // Si el producto ya existe en el carrito, sumar la cantidad
            const updatedCart = cart.map((product) =>
                product.prodId === newProduct.prodId
                    ? { ...product, quantity: product.quantity + newProduct.quantity }
                    : product
            );
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            // Si el producto no existe, añadirlo al carrito
            const updatedCart = [...cart, newProduct];
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    };

    const deleteAllProducts = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    return (
        <ProductContext.Provider value={{ cart, addProduct, deleteAllProducts }}>
            {children}
        </ProductContext.Provider>
    );
};
