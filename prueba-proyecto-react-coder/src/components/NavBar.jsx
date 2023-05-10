const NavBar = () => {
    return (
        <ul className="nav justify-content-evenly">
            <li className="nav-item active">
            <a className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} href="/">Store</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} href="/">PC</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} href="/">Console</a>
            </li>
            <li className="nav-item">  
            <a className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} href="/">Mobile</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} href="/">Lifestyle</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} href="/">Services</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} href="/">Community</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} href="/">Support</a>
            </li>
        </ul>
    )
}

export default NavBar;