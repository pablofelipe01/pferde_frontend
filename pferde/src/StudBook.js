import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import Video from './Video';


const StudBook = ({ horses }) => {
    if(!horses) return null
    
    return (
        <Row xs={1} md={3} className="g-4"> 
            {horses.map((horses) => {
                return (
                <Card key={horses.id} style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={horses.img_url} />
                    <Card.Body>
                      <Card.Title>{horses.name}</Card.Title>
                      <Card.Text>
                       {horses.breed}
                      </Card.Text><Card.Text>
                       Breed Line: {horses.line}
                      </Card.Text>
                      
                      <Button 
                      
                      onClick={() => Video(this.horses.video_url)}
                      variant="primary">Video</Button>  <Button variant="success">Bid</Button>
                    </Card.Body>
                
                  </Card>  
                  
                )
            })}
                

        </Row>


        
    )

        
}
export default StudBook;


            // <Button
            //     onClick={() => getDetail(object.objectNumber)}
            //     variant="outline-dark"
            //   >
            //     Details
            // </Button>