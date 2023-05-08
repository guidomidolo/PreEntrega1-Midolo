const Main = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={"https://www.gamingcoffee.com/wp-content/uploads/2019/03/Razer-BlackWidow-Kraken-Basilisk-Essential-Press-Size.png"} className="d-block w-100 h-50" alt={"Razer Gaming"} /> 
                            </div>
                            <div className="carousel-item">
                            <img src={"https://assets2.razerzone.com/images/pnx.assets/ba8347c2aacbe8e1b81dd7c1d4031cb2/razer-iskur-communitygallery-1500x1000-1.jpg"} className="d-block w-100" alt={"Setup Razer"} />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;