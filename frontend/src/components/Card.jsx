import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../css/productCard.css'
const Card = ({pictureSrc,title,minorDesc,price}) => {
    
    return (
        <>
            <div className="card">
               <img className="card-image" src={pictureSrc}/>
               <div className="card-main">
                <div className="card-main-area">
                    <div className="card-title-desc-area">
                        <div className="card-title">{title}</div>
                        <p className="card-minor-desc">{minorDesc}</p>
                    </div>
                    <p className='product-price'>{price}</p>
                    
                </div>
                <button className='product-to-cart'>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Card