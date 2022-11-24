import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stars from './Stars';
const Moviecard = ({movie}) => {
    console.log(movie)
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
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
 </div>
  )
}

export default Moviecard