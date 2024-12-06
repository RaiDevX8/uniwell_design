import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div className="container">
      <img className="main_image " src="../../assets/main.jpg" alt="main" />
      <div className="">
        <h2 className="head">Hello, Thanks for Visiting</h2>

        <div className="content">
          <p>
            Please help us improve our cafe services by filling in our feedback
            form. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
