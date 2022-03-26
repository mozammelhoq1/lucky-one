import React from 'react';
import image from '../../images/clocks.png'
const Header = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand ms-3" href="/home">Time Keepers</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto me-3">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/feature">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/price">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/about">About Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className='d-flex flex-wrap justify-content-center align-items-center'>
<h1 className='text-center'>"Time And Tide Wait For None"</h1>
  <img className='img-fluid' src={image} alt="" />
  
  </div>
        </>
    );
};

export default Header;