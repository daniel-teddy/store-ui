import React from "react";
import "../styles/school.css";

function ShowSchool({ popAdv, updatePopAdv }){
  const handleClick = () => {
    updatePopAdv(false);
  };
  return (
    <div className="mackster">
      <div className="cardtxst">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
        </svg> */}
        <div className="img_container">
          <h1 className="banner-title" style={{color: "#FFC43F", fontSize: "54px"}}>Welcome to our robotic courses <br></br></h1>
          {/* <h3>Click to register</h3> */}
        </div>
        <div className="card__content">
        <div className="btn-close" onClick={handleClick}>X</div>
          <p className="card__title">Register to our `hands-on` robotic and programming course</p>
          <p className="card__description">
          Here is your chance to master robotics from our hand-on learning class. From easy and intuitive face-to-face courses to engaging training courses offered both in-class and virtually by our trusted Trainers all over the island of cyprus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShowSchool;
