const NavBar = () => {
    return (
        <div className="d-flex justify-content-evenly">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active px-4">
                            <a class="nav-link" href="#">Store</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="nav-link" href="#">PC</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="nav-link" href="#">Console</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="nav-link" href="#">Mobile</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="nav-link" href="#">Lifestyle</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="nav-link" href="#">Community</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="nav-link" href="#">Support</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;