import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Plant.css'
import imge1 from './imge1.jpg'
export const Plant = () => {
  return (
<div className='container'>
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
   <div className='col-md-6 mt-5'>
            <img src={imge1} alt=""  style={{marginLeft:'180px'}} className='img-fluid'/>
     </div>
  </div>
</div>
  )
}
export default Plant;
