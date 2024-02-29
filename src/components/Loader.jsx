import Spinner from 'react-bootstrap/Spinner';

function Spimmer() {
  return (
    <Spinner animation="border" role="status" variant="bg-warning">
      <span className="visually-hidden">Loading...</span>
      {/* <Spinner animation="grow" variant="dark" /> */}
    </Spinner>
  );
}

export default Spimmer;

// react props; are argument into react component