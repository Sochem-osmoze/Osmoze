import './newnavbar.css'

function NewNavBar() {
    return(
        <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light mt-2">
            <a href="#" className="navbar-brand ml-5" id="nbrand" name="home" onClick={()=> {window.location='/'}}>Osm<span>oze</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>                
            </button>
            <div className="collapse navbar-collapse mr-5" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <a className="nav-item " href="#">
                        <a id="navbar-main-text" className="nav-link" name="home" onClick={()=> {window.location='/'}}>Home</a>
                    </a>
                    <a className="nav-item" href="#about">
                        <a className="nav-link scrollto" name="events" onClick={()=> {window.location='/#about'}}>About Us</a>
                    </a>
                    <a className="nav-item" href="https://events.osmoze.in/#/events/main/dashboard">
                        <a className="nav-link" name="forum" >Events</a>
                    </a>
                    <a className="nav-item" href="#">
                        <a className="nav-link" name="cloud" onClick={()=> {window.location='/announcement'}}>Announcement</a>
                    </a>
                    <a className="nav-item" href="#">
                        <a className="nav-link" name="people" onClick={()=> {window.location='/team'}}>Team</a>
                    </a>
                </ul>
            </div>
        </nav>       
</div>
    );
}
export default NewNavBar