import React from "react";
import { Link } from "react-router-dom";
import adminServices from "../Services/AdminServices";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top  ">
        <div class="container">
          <Link class="navbar-brand" href="#" to="/">
            AR MEDICARE
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  to="/products"
                >
                  Medicines
                </Link>
              </li>
             {adminServices.isLoggedIn()? <>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  to="/login"
                  onClick={(e)=>{adminServices.logout()
                  window.location.reload(false)}}
                >
                  logout
                </Link>
              </li>
              <li class="nav-item nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Hi, Ayesha
                
              </li></>: <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  to="/login"

                >
                  login
                </Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
