import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <div className="Navbar mt-3 ">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-top">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-end">
                        <Link to="/" className="navbar-brand">
                            <img src="./src/assets/img/nbd-banner.png" alt="NBD-Banner" className="nbd-banner"/>
                        </Link>
                        <button className="navbar-toggler justify-self-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link" to="/">Resumen</Link>
                                <Link className="nav-link" to="/proyects">Proyectos</Link>
                                <Link className="nav-link" to="/designs">Diseños</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet />
        </>
    )
}
