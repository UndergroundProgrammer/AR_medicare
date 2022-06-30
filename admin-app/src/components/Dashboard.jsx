import React from "react";
import { useNavigate } from "react-router-dom";
import adminServices from "../Services/AdminServices";
import alert from "../Services/Alert";
const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center dashboard-brand">
          <div className="col-lg-4 text-center">
            <h1>Welcome Admin!</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6  ">
            <div class="card my-3 shadow-lg" style={{ maxWidth: "540px" }}>
              <div className="row align-items-center">
                <div class="col-4 d-inline">
                  <img
                    src="images/doctor.jpg"
                    class="img-fluid rounded-circle"
                    alt="..."
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">Doctors</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural{" "}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        if (adminServices.isLoggedIn()) navigate("/doctors");
                        else {
                          alert.showErrorAlert("you should must login");
                        }
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6  ">
            <div class="card my-3 shadow-lg" style={{ maxWidth: "540px" }}>
              <div className="row align-items-center">
                <div class="col-4 d-inline">
                  <img
                    src="images/respondant.jpeg"
                    class="img-fluid rounded-circle"
                    alt="..."
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">Respondants</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural{" "}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        if (adminServices.isLoggedIn())
                          navigate("/respondants");
                        else {
                          alert.showErrorAlert("you should must login");
                        }
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 ">
            <div class="card my-3 shadow-lg" style={{ maxWidth: "540px" }}>
              <div className="row align-items-center">
                <div class="col-4 d-inline">
                  <img
                    src="images/customer.png"
                    class="img-fluid rounded-circle"
                    alt="..."
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">Customers</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural{" "}
                    </p>
                    <button
                      className="btn btn-primary "
                      onClick={() => {
                        if (adminServices.isLoggedIn()) navigate("/customers");
                        else {
                          alert.showErrorAlert("you should must login");
                        }
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 ">
            <div class="card my-3 shadow-lg" style={{ maxWidth: "540px" }}>
              <div className="row align-items-center">
                <div class="col-4 d-inline">
                  <img
                    src="images/pharmicst.jpg"
                    class="img-fluid rounded-circle"
                    alt="..."
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">Pharmacist</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural{" "}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        if (adminServices.isLoggedIn())
                          navigate("/pharmacists");
                        else {
                          alert.showErrorAlert("you should must login");
                        }
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
