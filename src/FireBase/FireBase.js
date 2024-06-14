import { initializeApp } from "firebase/app";
import {addDoc, collection ,getDocs, getFirestore, query, where } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtlJ0YyOky7sk5wnTRLGuWNH8FyOoYR0s",
  authDomain: "proyectofinal-3c5ff.firebaseapp.com",
  projectId: "proyectofinal-3c5ff",
  storageBucket: "proyectofinal-3c5ff.appspot.com",
  messagingSenderId: "514253993308",
  appId: "1:514253993308:web:95d9a38cfcbd4e8f06fd99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProducts(){

  const response= await getDocs(collection(db,"products"));
  //response es un QuerySnapshot (no es exactamente un array pero es iterable)
  const listaProds=[];//aca voy a guardar los objetos de mi casi array que es response
  response.forEach((docu)=> listaProds.push({ id: docu.id, ...docu.data() }));//aca con un forEach(lo uso aca por es js en react no!) por cada objeto pusheo a mi array ListaProds los nuevos objetos
  //...docu.data() es un metodo que me trae toda la info de todos los elementos de mi "response"
    
  return listaProds; 
   
}   

export async function filterProdsById(productId) { // Cambia el nombre de la función para reflejar el nuevo propósito

  const q = query(collection(db, "products"), where("__name__", "==", productId)); // Usa "__name__" para filtrar por ID
  
  const response = await getDocs(q); // Ejecuta la consulta personalizada
  
  const listaFiltro = [];
  
  response.forEach((docu) => listaFiltro.push({ id: docu.id, ...docu.data() })); // Procesa la respuesta
  
  return listaFiltro;
}

//QUERY= para realizar consultas personalizadas 

//getDocs= para recibir la querySnapshot 

//Colections es para recibir el array de "products" que esta en mi fireBase con todos sus objetos dentro 

//Where= es para aplicar condiciones como el "filter"

export async function getProductsForMen(){

  const q = query(collection(db, "products"), where("tipo", "==", "h")); // Usa "__name__" para filtrar por ID
  
  const response = await getDocs(q); // Ejecuta la consulta personalizada

  const listaProds=[];
  response.forEach((docu)=> listaProds.push({ id: docu.id, ...docu.data() }));
  return listaProds; 
}   

export async function getProductsForWoman(){

  const q = query(collection(db, "products"), where("tipo", "==", "m")); // Usa "__name__" para filtrar por ID
  
  const response = await getDocs(q); // Ejecuta la consulta personalizada

  const listaProds=[];
  
  response.forEach((docu)=> listaProds.push({ id: docu.id, ...docu.data() }));
  return listaProds; 
}   

export async function AddOrder(order){
  const orderCollection = collection(db, "orders");
  const docRef = await addDoc(orderCollection, order);
  return docRef.id
}

