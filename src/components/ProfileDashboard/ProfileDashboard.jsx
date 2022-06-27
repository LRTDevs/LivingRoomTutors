import Header from '../Header/Header';
import { useSelector } from 'react-redux';

import Nav from '../Nav/Nav'
import { Card, Col, Container } from "react-bootstrap";
import UserPage from '../UserPage/UserPage';
import AdminNavBar from '../AdminNavBar/AdminNavBar';

function ProfileDashboard() {
  const user = useSelector((store)=> store.userReducer)

  return (
  
  

  <div>
  <Header />
  {user.isAdmin === true ? <AdminNavBar/> : <Nav/>}
  {/* <Nav/> */}


<Col lg={{ span: 8, offset: 3 }}>
          <Container>
            <Card className="title">
              <Card.Body>
              <h1>Welcome To The Dashboard! </h1>
              </Card.Body>
            </Card>
          </Container>
        </Col>



  </div>
  
  ) ;
}


export default ProfileDashboard;
