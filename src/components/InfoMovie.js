import React from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

// import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
const InfoMovie = ({list}) => {
    let { id } = useParams();
   const item =
    list.find(el=>el.id==id)
    console.log(item)
    
   
  return (
    
    <div >

<Card className='container' style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title>Movie Informations</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.title}</Card.Subtitle>
        <img src={item.url}/>
        <Card.Text>
          <h6> directed by {item.director} in {item.year}</h6>
          {item.description}
        </Card.Text>
        <iframe width="560" height="315" src={item.trailerLink}
         title="YouTube video player" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowfullscreen></iframe>
      </Card.Body>

    </Card>
    
    
    </div>
  )
}

export default InfoMovie