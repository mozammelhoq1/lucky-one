import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Items/Item';

const Home = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('watch.json')
        .then(res => res.json())
        .then(data => setItems(data));
    }, []);

    const addToCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);        
    }

    return (
        <div className='container mx-auto'>
            
        <div className="row">
            <div className="col-md-9">
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item = {item}
                        addToCart={addToCart}
                    ></Item>)
                }
                </div>
                
            </div>
            <div className="col-md-3">
            <div className='col sticky-top'>
            <Cart
                cart={cart}
            ></Cart>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Home;