import React, { useState } from 'react'
import  '../css/productCardDescriptionDetail'

const ProductCardDetailDescriptions = () => {
    const[productQuantity,setProductQuantity]=useState('1')


  return (
    <div className='card-detail-desc-main'>
       <div className="card-detail-title"><h2>Dairy Milk</h2></div>
       <div className="card-detail-minor-desc"><span>10gram</span></div>
       <div className="card-detail-long-desc"><p>qsertyuiodfghikowpwdr wrtyeryjiko awertyuieryuhji</p></div>
       <div className="card-detail-pricing-area">
        <div className="card-detail-price">$154</div>
        <div className="card-detail-color">color</div>
        <div className="card-detail-product-quantity">
            <button>+</button>
            <input type="text" value={productQuantity} />
            <button>-</button>
        </div>
        <button>Add to Cart</button>
       </div>
    </div>
  )
}

export default ProductCardDetailDescriptions