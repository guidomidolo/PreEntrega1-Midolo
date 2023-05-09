import NavBar from "./NavBar";
import MiniRazer from "./images/razerAlt.png"
import LogoRazer from "./images/logoRazer.png"
import CartWidget from "./CartWidget";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-gray p-1">
                <div className="col-md-6">
                    <img src={MiniRazer} alt={"Razer Gaming"} width={50}/>
                </div>
                <div className="col-md-6 text-end">
                    <a href="#" className="text-dark text-decoration-none">¿Dónde comprar?</a> | <a href="#" className="text-dark text-decoration-none">Ayuda</a>
                </div>
            </div>
            <div className="row bg-dark p-2 align-items-center">
                <div className="col-md-2">
                    <img src={LogoRazer} alt={"Razer Gaming x Coderhouse"} width={150}/>
                </div>
                <div className="col-md-8 text-center">
                    <NavBar />
                </div>
                <div className="col-md-2 text-end text-white">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default Header;