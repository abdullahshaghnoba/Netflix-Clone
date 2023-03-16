// It appears once the user clicks add to favorite button
//  and shows movie details {name, img} also the user can
//  add a comment on the card before adding it to the 
// favorite list.

// When you click add to the favorite button you should
//  store the data that you have from the Modal in your
//  Database, using this endpoint(‘/addMovie’) from Lab13


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export default function FavModal(props) {


    const [addFeedback, setAddCom] = useState('');
    function handleFeedback(eve) {
        setAddCom(eve.target.value);
    }

    const handleSave = async () => {
        const dataToSend = {
            movieTitle: props.MovieData.title,
            release_date: props.MovieData.release_date,
            poster_path: props.MovieData.poster_path,
            overview: props.MovieData.overview,
            comment: addFeedback
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        };
        
        const res = await fetch(`${process.env.REACT_APP_serverURL}getMovie/${props.MovieData.id}`, requestOptions);
        const Data = await res.json();
       
        props.setNewArr(Data)
    }

    

    const style2 = { backgroundColor: 'black' }
    const style3 = { display: 'flex' }
    const style1 = { gap: '10px' }

    return (

        <Modal style={{ ...style2 }} show={props.showFlag} onHide={props.handleclose}>
            <Modal.Header style={{ backgroundColor: 'gray' }} closeButton>
                <Modal.Title style={{ color: 'yellow' }}>{props.MovieData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: 'gray' }}>
                <div style={{ ...style1, ...style3 }}>
                    <Image height={'560px'} src={`https://image.tmdb.org/t/p/w500${props.MovieData.poster_path}`} width='50%'></Image>
                    <Modal.Title style={{ fontSize: '15px' }}>
                        {props.MovieData.overview}
                    </Modal.Title>
                </div>
                <div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{ fontSize: '30px' }}>Update Your Feedback Here !</Form.Label>
                        <Form.Control defaultValue={props.MovieData.comment} as="textarea" onChange={handleFeedback} rows={3} />
                    </Form.Group>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleclose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    alert('Updated, Thank You For The Feedback')
                    handleSave();
                    props.handleclose();


                }}>
                    Update Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}  
