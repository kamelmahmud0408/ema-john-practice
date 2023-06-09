import React from 'react';
import './OrderReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const OrderReview = ({product,handleRemovefromCart}) => {
    const {id ,img,price,name ,quantity}=product;
    return (
        <div className='item-review'>
             <img src={img} alt="" />
             <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price <span className='orange-text'>${price}</span></p>
                <p>quantity <span className='orange-text'>{quantity}</span></p>

             </div>
             <button onClick={()=>handleRemovefromCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default OrderReview;