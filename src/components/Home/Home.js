import React from "react";
import "./Home.css";

const Home = () => (
  <div className="Home-container">
    <h1>Welcome to our Application.</h1>
    <div className="post-info">
      <p className="Home-text">
        In our application you can leave your feedback using tab button{" "}
        <b>Feedback Form</b>, also you can check the list of all feedbacks.
        <br />Feedbacks are stored in the Redux store.
      </p>
    </div>
  </div>
);

export default Home;
