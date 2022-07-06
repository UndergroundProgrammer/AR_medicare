import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StakeholderMapper from "./components/StakeholderMapper";
import adminServices from "./Services/AdminServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <ToastContainer
          autoClose={1000}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
        />
        <Routes>
          <Route
            path="/doctors"
            element={
              <StakeholderMapper
                method={adminServices.getDoctors}
                dataType={"Doctors"}
              />
            }
          />
          <Route
            path="/respondants"
            element={
              <StakeholderMapper
                method={adminServices.getRespondant}
                dataType={"Respondants"}
              />
            }
          />

          <Route
            path="/customers"
            element={
              <StakeholderMapper
                method={adminServices.getCustomers}
                dataType={"Customers"}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
