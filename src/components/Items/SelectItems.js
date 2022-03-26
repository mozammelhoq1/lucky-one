import React from 'react';

const SelectItems = ({watch}) => {
    const {name, img} = watch;
    return (
        <div className='container row my-2'>
                <img src={img} className="img-fluid col-4 p-0" alt="" />
            
            <div className="col-5 d-flex align-items-center">
                <h6>{name}</h6>
            </div>
            <div className="col-3 d-flex align-items-center">
                <button className="btn btn-warning btn-sm">❌</button>
            </div>
        </div>
    );
};

export default SelectItems;