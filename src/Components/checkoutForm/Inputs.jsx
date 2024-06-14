export default function Inputs(){
    return(<>
        <div className="col">
                <h1 style={{ color: "white", fontSize: "50px" }}>Complete con sus datos para continuar</h1>
                <h2 style={style}>Nombre</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                
                <h2 style={style}>Teléfono</h2>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <h2 style={style}>Email</h2>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <button onClick={handleSubmit} style={{marginTop:50}}>Comprar</button>
    </>)
}