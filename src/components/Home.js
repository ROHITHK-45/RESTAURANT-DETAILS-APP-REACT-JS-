import React from 'react'
import { useState,useEffect } from 'react'
import {Row,Col} from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'

function Home() {
  // USESTATE FUNCTION
  const [hotel,setHotel]=useState([])
// USEEFFECT FUNCTION
  useEffect(() => {
  const fetchData=async ()=>{
    await fetch('/restaurants.json')
    .then(data=>data.json())
    .then(data=>setHotel(data.restaurants))
  }
  fetchData();
  }, [])
  // console.log("our data is",hotel);
  
  
  return (
    <Row>
     {hotel.map(it =>(
      <Col sm={12} md={8} lg={4} xl={3}>
       <RestaurantCard data={it}/>
      </Col>
     ))}
    </Row>
  )
}

export default Home