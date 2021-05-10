import { useState } from 'react'
import { Button, Form, Col, Table, Row, Card, Modal } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ margin: 20 }}>

      {/* delete model start*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete </Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete id</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
      {/* delete  model end */}

      <Card style={{ width: '30%' }}>

        <Form>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
            </Form.Group>


          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control required placeholder="1234 Main St" />
          </Form.Group>



          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="Enter City Name" type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Andhra Pradesh</option>
                <option>Bihar</option>
                <option>West Bengal</option>
                <option>Tamil Nadu</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control placeholder="Enter Zip Code" type="number" />
            </Form.Group>
          </Form.Row>
          <br></br>
          <center>
            <Button variant="primary"    >
              Submit
                </Button>
          </center>

        </Form>

      </Card>
      <br></br>
      <Card>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Action</th>




            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>santhosh</td>
              <td>santhoshkumar24cs@gmail.com</td>
              <td>42/1,Vinayagar kovil street, Gunamangalam</td>
              <td>Cuddalore</td>
              <td>Tamil Nadu</td>
              <td>607109</td>
              <td>

                <Row>

                  <Col><Button onClick={handleShow}>Delete</Button></Col>
                  <Col><Button onClick={handleShow}> Edit </Button></Col>
                </Row>

              </td>



            </tr>
            <tr>
              <td>1</td>
              <td>santhosh</td>
              <td>santhoshkumar24cs@gmail.com</td>
              <td>42/1,Vinayagar kovil street, Gunamangalam</td>
              <td>Cuddalore</td>
              <td>Tamil Nadu</td>
              <td>607109</td>
              <td>
                <Row>

                  <Col><Button onClick={handleShow}>Delete</Button></Col>
                  <Col><Button onClick={handleShow}> Edit </Button></Col>
                </Row>
              </td>
            </tr>


          </tbody>
        </Table>
      </Card>

    </div>
  );
}

export default App;
