import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stars from './Stars';
import { Link } from 'react-router-dom';
const Moviecard = ({movie}) => {
    console.log(movie.rating)
  return (

 <div  >
  <Row >
      
        <Col>
          <Card>
            <Card.Img variant="top" src={movie.url} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
               directed by {movie.director}
               
              </Card.Text>
              <Card.Text>
              
               year {movie.year}
              
              </Card.Text>
              <Card.Text>
              
               type of the movie is {movie.type}
              
              </Card.Text>
              <Stars rating={movie.rating}></Stars>
             <Link to={`/info/${movie.id}`}><Button  variant="primary" > Info </Button></Link> 
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
 </div>
  )
}

export default Moviecard