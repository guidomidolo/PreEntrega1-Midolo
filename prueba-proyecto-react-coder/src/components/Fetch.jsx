import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

// ItemListContainer.jsx
const Fetch = () => {
    const [datos, setDatos] = useState([]);

    useEffect (() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=razer&limit=8")
        .then(response => response.json())
        .then(data => {
            setDatos(data.results);
        })
    },[datos]);
// ItemListContainer.jsx    

    return (
        <div className="row">
            <h4 class="pt-3" style={{ fontFamily: "RazerF5" , fontSize : 40}}>Productos</h4>
            {
            // ItemDetailContainer.jsx
            datos.map(item => 
                // ItemDetail.jsx
                <div key={item.id} className="col-md-3 p-3">
                    <div className="card">
                        <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <p className="card-text" style={{ fontFamily: "RazerF5" }}><b>{item.title}</b></p>
                                <p className="card-text" style={{ fontFamily: "RazerF5", color: "#44d62c" }}><b>${item.price}</b></p>
                                <p><ItemCount stock={5} /></p>
                            </div>
                     </div>
                </div>
                // ItemDetail.jsx
                )    
            // ItemDetailContainer.jsx
            }           
        </div>
    )
}

export default Fetch;