import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./port.css"

import { Link ,Outlet } from "react-router-dom";
function Home(){
    return (
        <>
          <nav
                className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
                id="mainNav"
              >
                <div className="container">
                  <a className="navbar-brand" href="#page-top">
                  Meetri Pvt. Ltd.
                  </a>
                  <button
                    className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Menu
                    <i className="fas fa-bars"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item mx-0 mx-lg-1">
                       <Link to={"/counter"}> <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">
                          Counter
                        </a></Link>
                      </li>
                      <li className="nav-item mx-0 mx-lg-1">
                       <Link to={"/userdata"}> <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
                          User Data
                        </a></Link>
                      </li>
                      <li className="nav-item mx-0 mx-lg-1">
                       <Link to={"/"}> <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">
                          Home
                        </a></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
        <div className="outl">
            <br />
            <br />
            <br />
            <br />
            <Outlet/>
        </div>
              {/* Masthead */}
            
        </>
    )
}
export default Home