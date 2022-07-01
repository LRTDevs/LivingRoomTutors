function ConfirmSession(session) {
  return (
    <>
      <Card.Text>
        {DateTime.fromISO(session.date).toLocaleString(DateTime.DATETIME_MED)}
      </Card.Text>

      <Button>Confirm Date and Time</Button>
    </>
  );
}

export default ConfirmSession;
