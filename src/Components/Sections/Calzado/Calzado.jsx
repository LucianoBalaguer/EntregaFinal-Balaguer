
import ProductOnly from "../../ItemListContainer/ProductOnly/ProductOnly";
import { useState, useEffect } from "react";
import { getProductsForMen } from "../../../FireBase/FireBase";

export default function Calzado(){

    const [myProds, setMyProds]= useState([]);

    useEffect(() => {

        getProductsForMen().then((products) => setMyProds(products));
        
    }, []);



    return(<>
        
        <h1 className='position-absolute start-0 tipografia' style={{top:150, marginLeft:26, color: "white"}}>Productos para hombre</h1>
        
        <div style={{ marginTop: 200 }}>
        {myProds.reduce((rows, product, index) => {
          if (index % 4 === 0) rows.push([]);
          rows[rows.length - 1].push(product);
          return rows;
        }, []).map((row, rowIndex) => ( 
          <div key={rowIndex} className="row g-3 mb-3" style={{ marginTop: 40 }}>
            {row.map((producto, colIndex) => (
              <div key={colIndex} className="col">
                <ProductOnly
                  title={producto.title}
                  img={producto.img}
                  price={producto.price}
                  prodId={producto.id}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

    </>)
}

