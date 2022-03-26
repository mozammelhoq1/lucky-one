import React from 'react';
import RandomItem from '../Items/RandomItem';
import SelectItems from '../Items/SelectItems';

const Cart = ({cart, resetAll, watch, setWatch}) => {
    const chooseForMe = () => {
        if (cart.length === 0) {
            alert('please choose at least one item')
            return watch;
        }
        const number = Math.floor(Math.random() * 100);
        const chooseOne = cart?.filter(watch => watch.id === number)
        if (chooseOne.length === 0) {
                chooseForMe();
        }
        else {
                setWatch(chooseOne)
        }
}
    return (
        <div className="card">
      <div className="card-body">
        <h6>Chosen Item</h6>
        <hr />
        <div className='p-0'>
        {
        cart.map(watch =><SelectItems
                            key={watch.id}
                            watch={watch}
                        ></SelectItems>)
        }
        </div>
        <button onClick={() => chooseForMe()} className='btn btn-success btn-sm mb-5'>Choose 1 For Me</button>
        {
        watch?.length ? <RandomItem
                            randomWatch={watch}
                        ></RandomItem> : ""
        }
        <br />
        <button onClick={() => resetAll()} className='btn btn-danger btn-sm'>Choose Again</button>
      </div>
    </div>
    );
};

export default Cart;