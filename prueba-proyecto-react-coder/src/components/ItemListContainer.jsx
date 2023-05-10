const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container">
            <div className="row py-5">
                <h4 class="pt-3" style={{ fontFamily: "RazerF5" , fontSize : 40}}>Productos</h4>
                <div className="col py-3">
                    <div class="alert alert-warning" style={{ fontFamily: "RazerF5" }} role="alert">{greeting}</div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;