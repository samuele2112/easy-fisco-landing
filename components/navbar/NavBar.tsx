import Link from "next/link";
const NavBar: React.FC = () => {
    return(
        <nav  id="MyNavbar" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
           <div className="container">
            <Link href="/" legacyBehavior>
            <a className="navbar-brand logo-text">EasyFisco</a>
            </Link>
                <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse offcanvas-collapse" id="navbarMain">
                    <ul className="navbar-nav ms-auto navbar-nav-scroll">
                        <li className="nav-item">
                            <Link href="/" legacyBehavior>
                            <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#features" legacyBehavior>
                            <a className="nav-link">Funzionalità</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#details" legacyBehavior>
                            <a className="nav-link">Dettagli</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#price" legacyBehavior>
                            <a className="nav-link">Prezzi</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" legacyBehavior>
                            <a className="nav-link">Contattaci</a>
                            </Link>
                        </li>
                    
                    </ul>
                    <span className="nav-item">
                        <a className="btn-outline-sm" href="#">Accedi</a>
                    </span>
                </div>
           </div>
        </nav>
    )
}
export default NavBar;