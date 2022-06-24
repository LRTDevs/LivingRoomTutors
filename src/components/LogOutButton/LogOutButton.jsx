import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';


function LogOutButton(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const handleLogOut=()=>{
    dispatch({ type: "LOGOUT" });
    history.push("/")
  }

  const signOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;
  return (
    <div
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className="logoutNameAndIcon"
      onClick={handleLogOut}
    >
      <p className="signOutName">Sign out</p>
      <span className="signOutIcon">{signOutIcon}</span>
    </div>
  );
}

export default LogOutButton;
