import {Button} from "react-bootstrap"
import { Card, Col, Container } from "react-bootstrap";
import { DateTime } from "luxon";
import { Table,   Row } from "react-bootstrap";
import RecordsCard from "../RecordsCard/RecordsCard";


function ConfirmSession({session}) {

  return (
    <>

<div>

    
      <div>
        <Row className="cardHead">
          <Col xs="7" className="cardHeadCol">
            <p className="tableHeads">Date Time</p>
          </Col>
       

          <Col xs="1"></Col>
        </Row>
      </div>
      <div>
    
      </div>
    </div>












      <Card.Text>
    
        {DateTime.fromISO(session.date).toLocaleString(DateTime.DATETIME_MED)}
         <Button   className="primaryButton matchButton">Confirm</Button>
      </Card.Text>

     
    </>
  );
}

export default ConfirmSession;
