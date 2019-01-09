import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return ( 
    <div className="header">
      <div className="navbar-layout">
        <div className="grid">
          <div className="grid-item">
            <div className="logo"></div>
          </div>
          <div className="grid-item">
            <div className="search">
              <input type="text" placeholder="Поиск" className="text-head-input"/>
            </div>
          </div>
          <div className="grid-item">
            <div className="notifications"><i className="fas fa-bell"></i></div>
            <div className="music"><i className="fas fa-music"></i></div>
          </div>
          <div className="grid-item item4"></div>
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;