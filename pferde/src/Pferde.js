import React from 'react';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';


const pferde = 'https://nameless-anchorage-51402.herokuapp.com/pferde/'

function Pferde(props) {
    let [horses, setHorses] = useState ([])
    
    
    
    useEffect ((horses) => {
        
        
        fetch(pferde)
        .then((res) => res.json())
        .then((res) => {
            setHorses(res)
            console.log(res)
        }) 
        .catch ((err) => {
            console.error(err)
        })
    },[])
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
                      href={horses.video_url}
                      variant="primary">Video</Button>  
                      
                      <Button href="https://bid.flyingeopensales.com/auctions/598df06b-69c5-4447-4e37-08d987db3211" variant="success">Bid</Button>
                    
                    </Card.Body>
                
                  </Card>  
                  
                )
            })}
                
        </Row>
      
    );

    
}

export default Pferde;