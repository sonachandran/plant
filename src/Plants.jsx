import React from 'react'
import './Plants.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import img2 from ''
//  import img5 from './img5.jpg'

export const Plants = () => {
  return (
  <div className='container'>
    <div className='navbars '>
        <div>Plants</div>
        <div>For office</div>
        <div>Plants care</div>
        <div>About</div>
    </div>
    <div className='row'>
        <div className='col-md-6 mt-5'>
            <h1 className='heading'>Best house <br />Plants Varieties </h1> <br />
            <Button variant="dark">Shop Now</Button> <br /><br />
        <div style={{fontSize:'40px'}}>
            Beautiful living greenery for <br />
        homes and offices <br />
        </div><br />
        <div style={{fontSize:'20px'}}>
        Wer've been mentioned in the press 
        </div><br />
        <div className='bloom'> 
        Bloomberg
        Forbes
        </div>
       </div> 
   
      <div className='col-md-6 '>
            {/* <img src="{img2}" alt="" /> */}
      </div>

   <div className='row mt-5'>
       <div className='col-md-6'>
          <div>
          Each houseplant set is handled quickly and safeley  <br />
          before being sent to your destination in specially  <br />
          designed insulated packaging.
          </div>
        </div>
      <div className='col-md-6 >
           <div 'style={{fontSize:'30px',fontFamily:'Lora '}} >
           Learn how ve take care of your plant  <br />
           at every stage of its journey from our  <br />
           greenhouse to your home.
           <div style={{fontSize:'15px'}} className='mt-5'>LEARN MORE</div>
      </div>    
    </div>

    <div className='row'>
       {/* <img src={img5} alt="" /> */}

       <div className='container-fluid mt-5 align-items-center ' style={{backgroundColor:'lightgrey',height:'300px'}}>
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',marginTop:"230px"}}>
            <div style={{}}>STEP1</div>
            <div style={{fontSize:'30px',font:'Lora'}}>We put everything together</div>
            <div>icon</div>
          </div>
       </div>
      </div>

      <div style={{marginTop:"250px"}}><Button variant="dark">See All</Button></div>


      </div>

      
      
 

 </div>

  
    
  )
}
