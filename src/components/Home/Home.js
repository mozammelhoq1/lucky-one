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
                {
                    items.map(item => <Item
                        key={item.id}
                        item = {item}
                    ></Item>)
                }
            </div>
            <div className="col-3 border">col-4</div>
        </div>
    );
};

export default Home;