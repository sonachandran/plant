import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img7 from './img7.jpg'
import img8 from './img8.jpg'
// import img11 from './img11.jpg'
import './Photo.css'

export const Photo = () => {
  return (
   <Container className='mt-5'>
    <Row>
        <Col lg={6} md={6} ex={12}>
            <img src={img7} alt="" className='img-fluid' />
        </Col>
        <Col lg={6} md={6} ex={12} >
            <img src={img8} alt="" className='img-fluid' />
        </Col>
    </Row>
    <Row className=' mt-5 image img-fluid ' >
        <Col lg={4} md={4}>          
            <div className='text'>
                <h2>Get inspired from our Instagram</h2>
                <div>If you use the hashtag #bioomey on Instagram,well spotlight you.</div>
                <b>Check it out</b>
            </div>
        </Col>
    </Row>
    </Container>
  )
}

// import React from 'react';
// import ImageWithText from './img11.jpg';

// const Photo = () => {
//   const imageUrl = 'img11.jpg';
//   const text = 'Your Text Here';

//   return (
//     <div>
//       <h1>Image with Text</h1>
//       <ImageWithText imageUrl={imageUrl} text={text} />
//     </div>
//   );
// };

// export default Photo;
