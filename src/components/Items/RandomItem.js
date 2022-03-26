import React from 'react';

const RandomItem = ({randomWatch}) => {
    const { name, img } = randomWatch[0];
    return (
        <li className='container row my-2'>
                <img src={img} className="img-fluid col-4 p-0" alt="" />
            
            <div className="col-5 d-flex align-items-center">
                <h6>{name}</h6>
            </div>
            <div className="col-3 d-flex align-items-center">
                <button className="btn btn-warning btn-sm">❌</button>
            </div>
        </li>
    );
};

export default RandomItem;