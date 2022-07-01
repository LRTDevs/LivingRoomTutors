import { Button } from "react-bootstrap";
import { Card, Col, Container } from "react-bootstrap";
import { DateTime } from "luxon";
import { Table, Row } from "react-bootstrap";
import RecordsCard from "../RecordsCard/RecordsCard";
import { useDispatch, useSelector} from "react-redux";


function ConfirmSession({ session }) {

  const user = useSelector((store) => store.user);
  const selectedSessions = useSelector((store) => store.selectedSessions);

  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch({
      type: "UPDATE_ISBOOKED",
      payload: session.id
    });
    console.log( 'selected id*************',session.id)
  };

  const handleReject = () => {
    dispatch({
      type: "UPDATE_ISREJECTED",
      payload:  session.id
    });
  };

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
        <div></div>
      </div>

      <Card.Text>
        {DateTime.fromISO(session.date).toLocaleString(DateTime.DATETIME_MED)}
        <Button onClick={handleConfirm} className="primaryButton matchButton">
          Confirm
        </Button>
        <Button onClick={handleReject} className="primaryButton matchButton">
          Reject
        </Button>
      </Card.Text>
    </>
  );
}

export default ConfirmSession;
