import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Item = ({item, addToCart}) => {
    const {name, price, img} = item;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5>{name}</h5>
                    <h6>$ {price}</h6>
                    <button className='btn btn-warning btn-sm' onClick={() => addToCart(item)}>Add to cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Item;