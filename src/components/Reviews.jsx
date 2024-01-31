import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Star from './star.jpg'
import './Reviews.css'
export const Reviews = () => {
  return (
<Container >
    <Row style={{marginTop:'140px'}}>
      <Col lg={4} md={4} xs={12} >
        <h4>REVIEWS</h4>
         <div>Shop with confidance by reading customer <br />
         reviews given by individuals who have used <br />
         Bioomey. Excelient quality and streamlined <br />
         service are both offered here.</div>
         <img src={Star} alt=""  / > 
         <span  className='mt-5'  style={{marginLeft:'20px',Weight:'700',fontFamily:'Aeonik',fontWeight:"700"}}>5/5</span>
         <div>2.479 reviews</div>
      </Col>
      <Col lg={4} md={4} xs={12}>
        <div style={{fontFamily:"Lora",fontSize:"25.55px"}}>We adore all our friends atBloomey, <br />
         especially the beauties who have come <br />
         to live with us! Great advice when  <br />
         needed, beautifully and safely packaged. <br />
         Highly recommend, it's just the best <br />  
         place for healthy plants and great value!</div>
         
         <div style={{fontWeight:'500',marginTop:'30PX'}}>Pamela S.</div>
         <div>Lake Forest, CA</div>

      </Col>
      <Col lg={4} md={4} xs={12} style={{}} className='d-flex justify-content-end '>
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
      <path d="M24.0356 13.3658C24.0356 19.3606 19.1758 24.2204 13.181 24.2204C7.18618 24.2204 2.32642 19.3606 2.32642 13.3658C2.32642 7.37099 7.18617 2.51123 13.181 2.51123C19.1758 2.51123 24.0356 7.37099 24.0356 13.3658Z" stroke="black" stroke-width="2.17092"/>
      <path d="M14.8092 9.02399L10.4674 13.3658L14.8092 17.7076" stroke="black" stroke-width="2.17092" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
      <path d="M2.63386 13.3658C2.63386 19.3606 7.49362 24.2204 13.4884 24.2204C19.4833 24.2204 24.343 19.3606 24.343 13.3658C24.343 7.37099 19.4833 2.51123 13.4884 2.51123C7.49363 2.51123 2.63387 7.37099 2.63386 13.3658Z" stroke="black" stroke-width="2.17092"/>
      <path d="M11.8602 9.02399L16.202 13.3658L11.8602 17.7076" stroke="black" stroke-width="2.17092" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </Col>
      
      
    </Row>
</Container>
  )
}

