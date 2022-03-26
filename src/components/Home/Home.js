import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Items/Item';

const Home = () => {
    // state declare for data store 
    const [items, setItems] = useState([]);
    // state declare for cart 
    const [cart, setCart] = useState([]);
    // state declare for item 
    const [watch, setWatch] = useState([]);

    // load data from json file 
    useEffect(() => {
        fetch('watch.json')
        .then(res => res.json())
        .then(data => setItems(data));
    }, []);

    // handle add to cart 
    const addToCart = (item) => {
        
        if (cart.length >= 4) {
            alert('You have already selected 4 items');
            return item;
        } else {
            let newCart = [];
            const existingProduct = cart.find(product => product.id === item.id);
            if (existingProduct) {
                alert("Same item can't be added twice");
                return item;
            } else {
                newCart = [...cart, item];
                setCart(newCart);
            }
        }
            const newCart = [...cart, item];
        setCart(newCart);
    }
    // reset cart data 
    const resetAll = () => {
        setCart([]);
        setWatch([]);
    }

    return (
        // cart and items container 
        <div className='container mx-auto mt-5'> 
        <div className="row">
            {/* items container  */}
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
            {/* cart container  */}
            <div className="col-md-3">
            <div className='col sticky-top'>
            <Cart
                cart={cart}
                resetAll={resetAll}
                watch={watch}
                setWatch={setWatch}
            ></Cart>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Home;