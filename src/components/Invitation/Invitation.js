import React from "react";
import { DiReact } from "react-icons/di";
import "./Invitation.scss";

const Invitation = () => {
  return (
    <div className="container w-7">
      <h1 className="invitation__heading mb-5 text-center">
        Welcome on my website build for practice{" "}
        <span className="invitation__special">
          <DiReact />
          React
        </span>{" "}
        skills 💪!
      </h1>
      <div className="container d-flex text-start w-75 lh-lg ">
        <p>
          My name is Joanna and I’m an aspiring Frontend developer. Currently
          I’m looking for a new challenges, so if you have one -
          <a href="/" class="invitation__special2">
            contact me
          </a> 
           😊
        </p>
      </div>
    </div>
  );
};

export default Invitation;
