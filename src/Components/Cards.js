import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Bar from './Bar';

import './Cards.css';

function Cards(props) {
  return (
    
    // <div className='  col-3 row '>
    // ,  height:'22.75rem'
    //                                                                          border-start border 
    <Card className='cardcontent  shadow-sm p-0 mb-5  bg-body  border rounded-3                       border-0       ' style={{ width: '26%'}}>
      {/* <Card.Img variant="top" src="https://images.pexels.com/photos/9403/pexels-photo-9403.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
      {/* <Card.Img variant="top" src="https://cdn.worldvectorlogo.com/logos/html5-2.svg" /> */}
      
      <Card.Img className='cardimg p-0  ' src={props.imgsrc} />

      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card 
        </Card.Text>
       <Bar variant={props.variant} val={props.now}  />
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    // </div>
   
  );
}

export default Cards;