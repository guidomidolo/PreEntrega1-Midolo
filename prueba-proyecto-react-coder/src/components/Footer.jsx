import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import Twitter from "./images/twitter.svg";

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white p-5">
            <div className="row">
                <div className="col-md-2">
                    <h6>Shop</h6>
                </div>
                <div className="col-md-2">
                    <h6>Explore</h6>
                </div>
                <div className="col-md-2">
                    <h6>Support</h6>
                </div>
                <div className="col-md-2">
                    <h6>Company</h6>
                </div>
                <div className="col-md-4 text-end">
                    <p style={{color:"green"}}>FOR GAMERS, BY GAMERS.</p>
                    <a href="#" className="text-light me-2"><img src={Facebook} alt={"Facebook"} width={24} /></a>
                    <a href="#" className="text-light me-2"><img src={Instagram} alt={"Instagram"} width={24} /></a>
                    <a href="#" className="text-light me-2"><img src={Twitter} alt={"Twitter"} width={24} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;