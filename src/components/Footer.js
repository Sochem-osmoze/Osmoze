import './Footer.css';

function Footer(){
    return(
            <footer>
                <div className="container">
                    <div className="row d-flex justify-content-around" >
                        <div className="col-12 col-md-3" >
                            <div className="row">
                                <img src="assets/images/logo.png" alt="logo" className="logo col-md-8 col-4 mx-auto" />
                                <div className="col-12 d-flex justify-content-around">
                                    <a className="btn btn-social-icon btn-facebook" href="{#}"><i className="fa fa-facebook"></i></a>
                                    <a className="btn btn-social-icon btn-instagram" href="{#}"><i className="fa fa-instagram"></i></a>
                                    <a className="btn btn-social-icon btn-linkedin" href="{#}"><i className="fa fa-linkedin"></i></a>
                                    <a className="btn btn-social-icon" href="mailto:soc.che@itbhu.ac.in"><i className="fa fa-envelope-o"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-md-3  ml-2" >
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li className=""><a href="{#}"  className="footer-link">Home</a></li>
                                <li className=""><a href="{#}" className="footer-link">About</a></li>
                                <li className=""><a href="{#}" className="footer-link">Announcements</a></li>
                                <li className=""><a href="{#}" className="footer-link">Team</a></li>
                                <li className=""><a href="{#}" className="footer-link">Events</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3" >
                            <h5>Our Address</h5>
                            <address>
                                IIT BHU(Varanasi), Varanasi, UTTRA PRADESH, INDIA, 221005<br />
                                <i className="fa fa-phone fa-lg"></i> :<a href="tel:+05426702029"> 0542 670 2029</a><br />
                                <i className="fa fa-envelope fa-lg"></i> : <a href="mailto:soc.che@itbhu.ac.in">soc.che@itbhu.ac.in</a>
                            </address>
                        </div>
                    </div>
                </div>
                <hr/> 
                <div className="container">
                    <div className="d-flex justify-content-center ">
                        <p>
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            Osmoze
                            <span>&#169;</span>
                            {new Date().getFullYear()} 
                            <span> This website is made with </span>
                            <i className="fa fa-heart" aria-hidden="true" ></i>
                            <span> by </span>
                            <a href="https://www.sochem.org/">Sochem Informatics Team</a>
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        </p>
                    </div>
                </div>
            </footer> 
    )
}

export default Footer