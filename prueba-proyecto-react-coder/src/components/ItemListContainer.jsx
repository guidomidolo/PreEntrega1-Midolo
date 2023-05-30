import { useState, useEffect } from "react";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect (() => {
        setTimeout(() => {
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=razer&limit=8")
            .then(response => response.json())
            .then(data => {
                setDatos(data.results);
            })
        }, 2000);
    },[datos]);

    return (
        <div className="container">
            <div className="row py-5">
                <h4 class="pt-3" style={{ fontFamily: "RazerF5" , fontSize : 40}}>Productos</h4>
                <ItemList datos={datos}/>          
            </div>
        </div>
    )
}

export default ItemListContainer;