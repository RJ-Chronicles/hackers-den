import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Navigation = () => {
  return (
    <header className="navigation-bg-color">
      <div className="header-area">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-1">
                <div className="logo">
                  {/* <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a> */}{" "}
                  Logo
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="menu-main d-flex align-items-center justify-content-end">
                  <div className="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                          <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                          <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact">Contact</NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-right-btn f-right d-none d-lg-block ml-15">
                    <Link to="#" className="btn header-btn">
                      Make an Appointment
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
