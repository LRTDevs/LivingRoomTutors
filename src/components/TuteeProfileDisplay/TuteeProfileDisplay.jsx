import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import Header from "../Header/Header";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import TutorProgressBar from "../TutorProgressBar/TutorProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import Logo from "../../images/logoCrop.png";


function TuteeProfileDisplay() {

  return (
    <div className="formBackground">
      <Header />
      <Container className="formContainer">
      <img alt="logo" style={{ maxWidth: "65px" }} src={Logo} />
        <div className="formContent">
          <h2>Bio Title</h2>
          {/* <FloatingLabel className="formInput"></FloatingLabel> */}
          <h3>Ad Hipster ipum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>

        </div>

      </Container>
    </div>
  )
  
}


export default TuteeProfileDisplay;
