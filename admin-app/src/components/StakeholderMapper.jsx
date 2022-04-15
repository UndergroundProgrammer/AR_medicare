import React from "react";
import Stakeholder from "./Stakeholder";
const StakeholderMapper = () => {
  const [stakeholders, setStakeholders] = React.useState([
    {
      name: "Arslan",
      email: "arslanahmad@gmail.com",
      imgUrl: "images/doctor1.jpg",
    },
    { name: "Ahmad", email: "ahmad@gmail.com", imgUrl: "images/doctor2.jpg" },
    { name: "Ali", email: "ali@gmail.com", imgUrl: "images/doctor3.jpeg" },
    {
      name: "Pakeeza",
      email: "pakeeza@gmail.com",
      imgUrl: "images/doctor4.jpeg",
    },
  ]);
  return (
    <div className="container">
      <h1 style={{ marginTop: "5rem" }}>Doctors</h1>
      {stakeholders.length == 0 ? (
        <p>There ar no products</p>
      ) : (
        <div className="row cardLayOut justify-content-center">
          {stakeholders.map((stakeholder, key) => (
            <div className="col-lg-5 ">
              <Stakeholder key={key} stakeholder={stakeholder} />{" "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StakeholderMapper;
