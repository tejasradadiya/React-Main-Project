import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="navbar navbar-expand-lg  custom-navbar">
        <NavLink className="navbar-brand custom-logo" to="/home">
          {" "}
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            style={{ width: "110px" }}
            alt="Logo"
          />
        </NavLink>
        <div className="col-md-5 ps-5 custom-search">
          {" "}
          <form className="form-inline">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <div
          className="navbar-collapse custom-nav collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-lg-0 custom-nav-list mb-2">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">Products Details</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Profile" className="nav-link">
                Profile
              </NavLink>
            </li>
            <li className="nav-item text-center custom-signup">
              <NavLink
                to="/signup"
                className="nav-link custom-signup-link"
                style={{ color: "gray" }}
              >
                <i className="bi bi-person-fill"></i> Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
    </header>
  );
};

export default Header;
