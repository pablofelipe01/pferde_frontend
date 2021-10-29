import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Card, Button, Modal } from 'react-bootstrap';
import ModalVideo from 'react-modal-video'





function Video(props) {

	const pferde = 'https://nameless-anchorage-51402.herokuapp.com/pferde/'
	const [horses, setHorses] = useState ([])
    const [isOpen, setOpen] = useState(false)
 
    
    
    
    
    useEffect (() => {
        
        
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
        <>
              
                        <React.Fragment>

                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} src={horses.video_url} onClose={() => setOpen(false)} />
                        </React.Fragment>
      

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
                      onClick={()=> setOpen(true)}
                      src={horses.video_url}
                      variant="primary">Video</Button>  
                      
                      <Button href="https://breeders.zangersheide.auction/en/auction/Eclat-DOr-M-Z-x-" variant="success">Bid</Button>
                    
                    </Card.Body>
                
                  </Card>  
                  
                )
            })}
                
        </Row>
      </>
    );

    
}

export default Video;

