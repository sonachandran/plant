import React from 'react'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
// import img6 from './img6.jpg'
export const Grid = () => {
  return (
  <div className='container'>
    <div className='row'>
        <div className='col-md-3 mt-5 '>
            <img src={img3} alt="" />
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>Fiddle-leaf fig</div>
            <div style={{}}>$110.99</div>
            </div>
        </div>
        <div className='col-md-3 mt-5 '>
            <img src={img4} alt="" />
             <div style={{display:'flex',justifyContent:'space-between'}}>
             <div>Aloe vera</div>
             <div style={{marginLeft:'px'}}>$110.99</div>
             </div>
        </div>
        <div className='col-md-3 mt-5 '>
            <img src={img5} alt="" />
            <div style={{display:'flex',justifyContent:'space-between'}}>
             <div>Strelitzia nicolai</div>
             <div>$110.99</div>
             </div>
        </div>
        <div className='col-md-3 mt-5 '>
            <img src={img4} alt="" />
            <div style={{display:'flex',justifyContent:'space-between',size:'20px'}}>
             <div>Ficus microcarpa</div>
             <div>$110.99</div>
             </div>
        </div>
    </div>
  </div>
  )
}
