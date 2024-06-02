import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import freee from "./images/group.png";

function Calender() {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div className="   position-relative   row  mainroow">
      <img src={freee} alt="Description of the image" className="FreeCalendr" fluid />


        <div className="   text-center texto">
          
          <h1 className="bi bi-calendar3  my-5 mx-2 clendartitle">
            {" "}
            Schedule a free meeting with our experts

          </h1>
          
        </div>

        <div className="col-md-6 text-center calennd  ">
          <p className="my-4">
            Choose the most convenent day for you and we will contact with you
            on it.
          </p>
          <Calendar onChange={onChange} value={date} />
        </div>
        <div className="col-md-6 text-center rightb ">
          <p>
            We are here to help and answer any query you might have. We look
            forward to hearing from you!
          </p>
          <Form>
            <Row className="mb-3 px-2">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="number" placeholder="Phone" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} placeholder="Massage" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </div>
        

        <div className="row  text-center">
          <p className=" ">
            One of our experts will contact with you before{" "}
            <h5 className="text-primary"> {formatDate(date)}</h5>
          </p>
        </div>
      </div>




    </>
  );
}
export default Calender;
