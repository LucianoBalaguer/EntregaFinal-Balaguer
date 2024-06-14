import "./AppMaestro.css"
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";

export default function AppMaestro(){

    useEffect(()=>{
        document.body.style.backgroundColor = "#330000";
      }, [])

    return(<>
        <div className="position-absolute top-0 start-0" style={{ width: "100%", height: "100px", background:"Black", border: '1px solid red' }}>
            <div className='mt-3 col'>   
             <NavBar/>
            </div>
        </div>    
    </>)
}