import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Nav from "../Nav/Nav";
import { useHistory } from "react-router-dom";
import "./Profile.css";
import axios from "axios";
import FormData from "form-data";

import { Card, Col, Container } from "react-bootstrap";

function ProfilePicUpload() {

  const history = useHistory();
  const [file, setFile] = React.useState('');
  const user = useSelector((store)=> store.user);
  const dispatch = useDispatch();


  const handleClick = (e) => {
    //This should be in a saga
    e.preventDefault()
    const data = new FormData()
    data.append('file', file)
    let url = `http://localhost:5000/api/upload/${user.id}`;
    axios.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(() => {
      history.push(`/profile`)
    })
   
    
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
                  {/* <ProfilePicItem /> */}
                  <h1>Profile Pic Upload</h1>
                  <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
                  <button onClick={handleClick}>Upload</button>
                </form>
                
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </div>
    </div>

  );
}

export default ProfilePicUpload;