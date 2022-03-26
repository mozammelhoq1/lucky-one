import React, { useEffect, useState } from 'react';
import Item from '../Items/Item';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('watch.json')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])
    return (
        <div className="row container mx-auto pt-5">
            <div className="col-9 border">
                <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3 g-4'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item = {item}
                    ></Item>)
                }
                </div>
                
            </div>
            <div className="col-3 border">col-4</div>
        </div>
    );
};

export default Home;