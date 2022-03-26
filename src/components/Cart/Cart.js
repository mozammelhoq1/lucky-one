import React from 'react';
import SelectItems from '../Items/SelectItems';

const Cart = ({cart}) => {
    return (
        <div className="card">
      <div className="card-body">
        <h6>Chosen Item</h6>
        <hr />
        <ol className='p-0'>
        {
        cart.map(watch =><SelectItems
                                    key={watch.id}
                                    watch={watch}
                                ></SelectItems>)
        }
        </ol>
        <button className='btn btn-success btn-sm mb-5'>Choose 1 For Me</button>
        <br />
        <button className='btn btn-danger btn-sm'>Reset All</button>
      </div>
    </div>
    );
};

export default Cart;