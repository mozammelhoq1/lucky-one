import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Item = ({item}) => {
    const {name, price, img} = item;
    return (
        <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5>{name}</h5>
        <h6>$ {price}</h6>
        <button className='btn btn-warning btn-sm'>Add to cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
      </div>
    </div>
  </div>
    );
};

export default Item;