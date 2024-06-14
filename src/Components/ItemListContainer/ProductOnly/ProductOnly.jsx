import "./ProductoOnly.css"
import { Link } from "react-router-dom"


export default function ProductOnly({title,img,price,prodId,description}){
    
    const style={
        color: "Black",
        textDecoration: "none",
        fontSize: "22px",
        textAlign: "left",
    }

    const btn = {
        background: "red",
        color: "white",
        marginTop: "50px",
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 40px)"
    }

    const priceStyle = {
        color: "orange",
        fontSize: 25,
        position: "absolute",
        bottom: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        
    };

    const priceStyle2 = {
        color: "black",
        fontSize: 20,
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
    };
    

    return(<>
        
        <div className="card" style={{ width: "18rem", height: "31rem"}}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">

                    <h1 className="card-title">
                        <Link to={`/product/${prodId}`} style={style}>{title}</Link>
                    </h1>

                    <p style={priceStyle2}>{description}</p>
                    
                    <p className="card-text" style={priceStyle}>${price}</p>

                </div>
        </div>

    </>)
}

