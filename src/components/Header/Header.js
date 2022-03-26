import React from 'react';
import image from '../../images/clocks.png'
const Header = () => {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand ms-3" href="/home">Navbar</a>
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
<div>
    <img className='img-fluid' src={image} alt="" />
</div>
        </div>
    );
};

export default Header;