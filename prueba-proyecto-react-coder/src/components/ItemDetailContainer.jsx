import { useEffect } from "react";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

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
        <div>
            
        </div>
    )
}

export default ItemDetailContainer;