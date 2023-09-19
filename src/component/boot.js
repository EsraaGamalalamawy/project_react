import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img from "../images/صور-بنات-صغار-2020-2.jpg"

const Boot = () => {
    return (
        <div className='outimg'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Img} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

        </div>
    )
}

export default Boot
