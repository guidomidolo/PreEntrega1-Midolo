import ItemCount from "./ItemCount";

const Item = ({item}) => {
    return (
        <>
            <div className="col-md-3">
                <div key={item.id} className="p-3">
                    <div className="card border-0">
                        <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <p className="card-text" style={{ fontFamily: "RazerF5" }}><b>{item.title}</b></p>
                                <p className="card-text" style={{ fontFamily: "RazerF5", color: "#44d62c" }}><b>${item.price}</b></p>
                                <p><ItemCount stock={5} /></p>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Item;