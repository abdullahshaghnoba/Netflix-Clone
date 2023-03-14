// It includes the card that represents the movie
// Each movie should have a button to add to the 
// favorite list.
// It includes a ModalMovie component.
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import ModalMovie from './ModalMovie';
import { useState } from 'react';
import React from 'react'
export default function Movie(props) {
    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const handleShow = (item) => {

        setClickedMovie(item);
        setShowFlag(true);
    }

    const handleclose = () => {
        setShowFlag(false);
    }
    const style1 = {backgroundColor: 'black'};
    const style2 = { width: '18rem'};
   
    return (

        <div>
           
               
                    <Col >
                        <Card border="danger" style={{...style1, ...style2}} >

                            <Card.Body>
                                <Card.Img height={'250px'}  variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path} `} />

                                <Card.Header style={{color:'yellow'}} >{props.movie.title}</Card.Header>
                                <Card.Text style={{color:'red'}} >
                                    {`${props.movie.overview.substring(0, 100)}...`}
                                </Card.Text>
                                <Button variant="light" onClick={() => { handleShow(props.movie) }}>add to favorite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
              
           

            <ModalMovie showFlag={showFlag} handleclose={handleclose} MovieData={clickedMovie} />
        </div>
    )
}