import React, { useEffect, useState } from "react";
import "./Adminstyle.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import AdminFooter from "./AdminFooter";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({});

  const logout = () => {
    localStorage.removeItem("adminuser");
    navigate("/admin");
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("adminuser"));
    if (!data) {
      navigate("/admin");
    }
    setAdmin(data);
  }, []);

  return (
    <div>

      <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
        <div className="container-fluid d-flex align-items-center justify-content-end p-1">
          <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
            <h2 className="text-primary mb-0">
              <i className="fa fa-hashtag" />
            </h2>
          </a>
          <a href="#" className="sidebar-toggler flex-shrink-0">
            <i className="fa fa-bars" />
          </a>
          <form className="d-none d-md-flex ms-4">
            <input
              className="form border-0 "
              type="search"
              placeholder="Search"
              
            />
          </form>
          <div className="navbar-nav align-items-center ms-auto">
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-envelope me-lg-2" />
                <span className="d-none d-lg-inline-flex">Message</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="img/user.jpg"
                      alt
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">
                        Jhon send you a message
                      </h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="img/user.jpg"
                      alt
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">
                        Jhon send you a message
                      </h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="img/user.jpg"
                      alt
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">
                        Jhon send you a message
                      </h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item text-center">
                  See all message
                </a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-bell me-lg-2" />
                <span className="d-none d-lg-inline-flex">Notificatin</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">Profile updated</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">New user added</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">Password changed</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item text-center">
                  See all notifications
                </a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://sneat-vuetify-admin-template.vercel.app/assets/avatar-1-19a9226d.png"
                  className="image w-25 rounded-circle ms-4 "
                  alt="User Avatar"
                />
                <span className="d-none d-lg-inline-flex">John Doe</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                <a href="#" className="dropdown-item">
                  My Profile
                </a>
                <a href="#" className="dropdown-item">
                  Settings
                </a>
                <a href="#" className="dropdown-item">
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="d-flex">
        <div
          style={{ minHeight: "82vh"}}
          className="admin-nav col-lg-2"
        >
          <ul className="mt-5 " style={{'list-style': 'none'}}>
            <li>
              <NavLink to="/admin/dashboard">
                <div className="w-75 p-1 btn btn-primary ps-4 pe-4 pt-2 pb-2">
                  Dashboard
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/admincategory"}>
                <div className="w-75 p-1 btn  btn-primary mt-4 ps-4 pe-4 pt-2 pb-2">
                  Category
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/admin/product`}>
                <div className="w-75 p-1 btn  btn-primary mt-4 ps-4 pe-4 pt-2 pb-2">
                  Product
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/admin/user`}>
                <div className="w-75 p-1 btn  btn-primary mt-4 ps-4 pe-4 pt-2 pb-2">
                  Users
                </div>
              </NavLink>
            </li>
            <li>
              <button
                className="btn btn-danger w-50 ms-4 mt-4"
                onClick={() => logout()}
              >
                Log out
              </button>
            </li>
          </ul>
        </div>

        <div className="col-lg-10 p-0">
          <Outlet />
        </div>
      </div>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
