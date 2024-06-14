import { Link } from "react-router-dom"
export default function Titulo(){

    const style={
        color: "white",
    };

    return <h1 className="h1 tipografia" role="alert" style={{color: "White", fontSize:31}}><Link to={"/"} style={style}>RezArrows</Link></h1>
    
}