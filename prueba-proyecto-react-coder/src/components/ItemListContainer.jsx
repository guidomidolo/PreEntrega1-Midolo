import Fetch from "./Fetch";

const ItemListContainer = () => {
    return (
        <div className="container">
            <div className="row py-5">
                {/* <div className="col py-3">
                    <div class="alert alert-warning" style={{ fontFamily: "RazerF5" }} role="alert">{greeting}</div>
                </div> */}
                <Fetch />
            </div>
        </div>
    )
}

export default ItemListContainer;