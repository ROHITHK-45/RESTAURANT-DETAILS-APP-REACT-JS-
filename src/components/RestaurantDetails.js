import React, { useState, useEffect } from "react";
import { Row, Col, Image, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";
import "./Restaurantdetails.css"

function RestaurantDetails() {
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  const restaurantdetais = details.find((item) => item.id == id);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/restaurants.json")
        .then((res) => res.json())
        .then((data) => setDetails(data.restaurants));
    };
    fetchData();
  }, []);

  return (
    <>
    <Link className="btn btn-outline-dark my-2 mx-1 rounded btn-sm" to='/home'>Back</Link>
      {restaurantdetais ? (
        <Row className="my-3 mx-3">
          <Col md={3}>
            <Image src={restaurantdetais.photograph} alt={restaurantdetais.name} fluid/>
          </Col>

          <Col md={4}>
            <ListGroup.Item>
              <h2>{restaurantdetais.name}</h2>
              <p>{restaurantdetais.neighborhood}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Cuisine:{restaurantdetais.cuisine_type}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{restaurantdetais.address}</p>
            </ListGroup.Item>
          </Col>

          <Col  md={4}>
            <ListGroup.Item id="review_row">
              <h4>operating hours:</h4>
              <p>{`Monday:${restaurantdetais.operating_hours.Monday}`}</p>
              <p>{`tuesday:${restaurantdetais.operating_hours.Tuesday}`}</p>
              <p>{`wednesday:${restaurantdetais.operating_hours.Wednesday}`}</p>
              <p>{`thursday:${restaurantdetais.operating_hours.Thursday}`}</p>
              <p>{`friday:${restaurantdetais.operating_hours.Friday}`}</p>
              <p>{`saturday:${restaurantdetais.operating_hours.Saturday}`}</p>
              <p>{`sunday:${restaurantdetais.operating_hours.Sunday}`}</p>
            </ListGroup.Item>
          </Col>
          <Row id="review_row" className="my-3 mx-1 p-3 rounded card">
             <Rating data={restaurantdetais.reviews}/>
          </Row>
        </Row>
        
        
      ) : null}
    </>
  );
}

export default RestaurantDetails;
