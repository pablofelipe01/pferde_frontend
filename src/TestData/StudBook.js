import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import Video from '../Video';
import { useState, useEffect } from 'react';



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


            // const StudBook = ({ horses }) => {
            //     if(!horses) return null




// const pferde = 'https://nameless-anchorage-51402.herokuapp.com/pferde/'

// function StudBook(props) {
//     let [pferde, setPferde] = useState ([])
//     useEffect (() => {
//         let url = pferde

//         fetch(url)
//         .then((res) => res.json())
//         .then((res) => {
//             setPferde(res.pferde)
//             console.log(res)
//         })
//         .catch ((err) => {
//             console.error(err)
//         })
//     },[])