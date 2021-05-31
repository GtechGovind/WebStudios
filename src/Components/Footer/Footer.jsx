import {NavLink} from "react-router-dom";

function Contact() {
    return (
        <footer id="footer">

            <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h4>Join Our Newsletter</h4>
                            <p>join our telegram channel to get latest updates now.</p>
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>WebStudios</h3>
                            <p>
                                Kamgar Nagr Kurla,<br />
                                Mumbai Maharashtra 24,<br />
                                India <br /><br />
                                <strong>Phone:</strong> +91 79771 92875<br />
                                <strong>Email:</strong> gtech.govind2000@gmail.com<br />
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"/><NavLink activeClassName = "active" exact to="/">Home</NavLink></li>
                                <li><i className="bx bx-chevron-right"/><NavLink activeClassName = "active" exact to="/project">Projects</NavLink></li>
                                <li><i className="bx bx-chevron-right"/><NavLink activeClassName = "active" exact to="/service">Services</NavLink></li>
                                <li><i className="bx bx-chevron-right"/><NavLink activeClassName = "active" exact to="/blog">Blog</NavLink></li>
                                <li><i className="bx bx-chevron-right"/><NavLink activeClassName = "active" exact to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"/> <NavLink activeClassName = "active" exact to="/service">Web Design</NavLink></li>
                                <li><i className="bx bx-chevron-right"/> <NavLink activeClassName = "active" exact to="/service">Web Development</NavLink></li>
                                <li><i className="bx bx-chevron-right"/> <NavLink activeClassName = "active" exact to="/service">Product Management</NavLink></li>
                                <li><i className="bx bx-chevron-right"/> <NavLink activeClassName = "active" exact to="/service">Marketing</NavLink></li>
                                <li><i className="bx bx-chevron-right"/> <NavLink activeClassName = "active" exact to="/service">Graphic Design</NavLink></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>Connect with us to stay updated with daily news and upcoming events.</p>
                            <div className="social-links mt-3">
                                <a href="https://twitter.com/govindrockstsr" className="twitter"><i className="bx bxl-twitter"/></a>
                                <a href="https://www.facebook.com/rock.govind.lucif" className="facebook"><i className="bx bxl-facebook"/></a>
                                <a href="https://www.instagram.com/_govind20/" className="instagram"><i className="bx bxl-instagram"/></a>
                                <a href="https://www.linkedin.com/in/gtechgovind/" className="linkedin"><i className="bx bxl-linkedin"/></a>
                                <a href="https://github.com/GtechGovind" className="github"><i className="bx bxl-github"/></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container footer-bottom clearfix">
                <div className="copyright">
                    &copy; Copyright <strong><span>WebStudios</span></strong>. All Rights Reserved
                </div>

                <div className="d-flex justify-content-end nav-menu">
                    <NavLink to="/privacy" className="mr-4"><strong>Privacy & Policies</strong></NavLink>
                    <NavLink to="/about" className="mr-4"><strong>AboutUs</strong></NavLink>
                    <NavLink to="/sitemap" className="mr-4"><strong>SiteMap</strong></NavLink>
                    <NavLink to="/disclaimer" className="mr-4"><strong>Disclaimer</strong></NavLink>
                </div>

            </div>
        </footer>
    );
}

export default Contact;
