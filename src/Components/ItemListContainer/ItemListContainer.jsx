import ProductOnly from "./ProductOnly/ProductOnly";
import { useEffect, useState } from "react";

import { getProducts } from "../../FireBase/FireBase";
export default function ItemListContainer() {
  
  const [myProds, setMyProds] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setMyProds(products));
  }, []);

  return (
    <>
      <h1 className='position-absolute start-0 tipografia' style={{ top: 150, marginLeft: 26, color: "white" }}>
        Nuevos Productos y lanzamientos
      </h1>
      
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
                  description={producto.description}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

    </>
  );
}