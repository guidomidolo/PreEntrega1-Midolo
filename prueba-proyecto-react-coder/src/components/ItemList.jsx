import Item from "./Item";

const ItemList = ( {datos} ) => {
    return (
        <>
            {
            datos.map(item => 
                <Item item={item} />
                )    
            } 
        </>
    )
}

export default ItemList;