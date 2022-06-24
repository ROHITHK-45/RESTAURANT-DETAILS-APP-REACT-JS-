import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RestaurantCard({data}) {
  return (
 <Link to={`/restaurants/${data.id}`}>
      <Card className='mx-3 my-2' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.photograph} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            <p><strong>Cuisine:</strong>{data.cuisine_type}</p>
          </Card.Text>
          <Card.Text>
            {data.neighborhood}
          </Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
 </Link>
  )
}

export default RestaurantCard