import * as React from 'react';
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Nav from "../Nav/Nav";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Profile.css";

import { Card, Col, Container } from "react-bootstrap";

function Profile() {
  const [file, setFile] = React.useState('');

  const handleFileChange = (event) => {
    event.preventDefault();
    setFile(event.target.value);
};

  const handleClick = () => {
    console.log('clicked', {file});
    // history.push(`/ImageUpload/${user.id}`)
    dispatch({
      type: 'UPLOAD_PROFILE_PIC',
      payload: file
  });
  }
  return (
    <div>
      <Nav />
      <div className="container">
        <Col lg={{ span: 8, offset: 3 }}>
          <Container>
            <Card className="title">
              <Card.Body>
                <form>
                  <h1>React File Upload</h1>
                  <input
                    value={file}
                    onChange={handleFileChange}
                    type="file"
                  />
                  <button onClick={handleClick} type="submit">Upload</button>
                </form>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </div>
    </div>

  );
}

export default Profile;
