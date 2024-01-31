import React from 'react'
import img2 from './img2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
export const Picture = () => {
  return (
   
    <div className='container mt-5'>
    <div className='row '>
      
       <img src={img2} alt=""   style={{zIndex:'1'}}/>
      
       <div className=' align-items-center container-fluid' style={{backgroundColor:'#EDEDED',height:'300px',marginTop:'-140px' }}>
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',marginTop:"230px"}}>
            <div style={{}}>STEP1</div>
            <div style={{fontSize:'30px',font:'Lora'}}>We put everything together</div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
      <path d="M24.0356 13.3658C24.0356 19.3606 19.1758 24.2204 13.181 24.2204C7.18618 24.2204 2.32642 19.3606 2.32642 13.3658C2.32642 7.37099 7.18617 2.51123 13.181 2.51123C19.1758 2.51123 24.0356 7.37099 24.0356 13.3658Z" stroke="black" stroke-width="2.17092"/>
      <path d="M14.8092 9.02399L10.4674 13.3658L14.8092 17.7076" stroke="black" stroke-width="2.17092" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
      <path d="M2.63386 13.3658C2.63386 19.3606 7.49362 24.2204 13.4884 24.2204C19.4833 24.2204 24.343 19.3606 24.343 13.3658C24.343 7.37099 19.4833 2.51123 13.4884 2.51123C7.49363 2.51123 2.63387 7.37099 2.63386 13.3658Z" stroke="black" stroke-width="2.17092"/>
      <path d="M11.8602 9.02399L16.202 13.3658L11.8602 17.7076" stroke="black" stroke-width="2.17092" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
          </div>
       </div>
       <div style={{marginTop:"250px"}}><Button variant="dark">See All</Button></div>


      </div>
     </div>
   
  )
}
export default Picture;
