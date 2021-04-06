import './Footer.css';

function Footer(){
    return(
            <footer>
                {/* <hr/>  */}
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
                            <a href="https://www.sochem.org/" >Sochem Informatics Team</a>
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        </p>
                    </div>
                </div>
            </footer> 
    )
}

export default Footer