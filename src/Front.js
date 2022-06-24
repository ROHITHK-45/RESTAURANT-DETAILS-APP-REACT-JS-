import React from "react";
import "./Front.css";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

function Front() {
  return (
    <div className="main">
      <img
        className="home_img"
        src="https://wallpapercave.com/wp/wp1874165.jpg"
        alt=""
      />

      <div className="h2">
        <strong className="hungry">Hungry?...</strong>
        <br></br>
        <h1>
          {" "}
          Get your favourite<br></br>restaurant details<br></br> near you
        </h1>
      </div>

      <Link to="/home">
        <button className="home_button">Let's Go Then</button>
      </Link>

      <div className="quotes">
        <Row>
          <Col className="row1">
            <ListGroup.Item className="row1">
              <p className="row1">
                “Part of the secret of success is to eat what you like and let
                the food fight it out inside.” –Mark Twain
              </p>
            </ListGroup.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <ListGroup.Item >
              <p className="row1">
                “The only thing I like better than talking about food is
                eating.” –John Walters
              </p>
            </ListGroup.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <ListGroup.Item >
              <p className="row1">
                “One cannot think well, love well, sleep well, if one has not
                dined well.” –Virginia Woolf
              </p>
            </ListGroup.Item>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Front;
