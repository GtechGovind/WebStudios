import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <header id="header" className="fixed-top ">
                <div className="container align-items-center navbar-dark">
                    <nav className="navbar navbar-expand-lg navbar-dark">

                        <h1 className="logo mr-auto"><NavLink to="/">WebStudios</NavLink></h1>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <li><NavLink className = "nav-link" activeClassName = "active" exact to="/">Home</NavLink></li>
                                </li>

                                <li className="nav-item">
                                    <li><NavLink className = "nav-link" activeClassName = "active" exact to="/project">Projects</NavLink></li>
                                </li>

                                <li className="nav-item">
                                    <li><NavLink className = "nav-link" activeClassName = "active" exact to="/service">Services</NavLink></li>
                                </li>

                                <li className="nav-item">
                                    <li><NavLink className = "nav-link" activeClassName = "active" exact to="/blog">Blog</NavLink></li>
                                </li>

                                <li className="nav-item">
                                    <li><NavLink className = "nav-link" activeClassName = "active" exact to="/contact">Contact</NavLink></li>
                                </li>

                                <li className="nav-item">
                                    <a href = "https://api.whatsapp.com/send/?phone=917977192875&text=Can+we+arrange+a+meeting?" className="get-started-btn scrollto">+91 7977192875</a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;
