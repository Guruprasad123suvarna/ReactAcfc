import React from "react";
import Greeting from "../Greeting";
import "./Header.css";
 
 
 
const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand navbar-light light-bg px-3">
        <div className="side-nav-button p-2 me-3 text-light">
           
          {/* <i class="fa-regular fa-address-card" ></i> */}
          <img src="https://github.com/Guruprasad-suvarna/Tensai/assets/83869639/509ec4b2-4a2b-4599-98a7-9d23e285770e"style={{ width: '60px', height: '50px' }} />
        </div>
       
       
 
        <ul className="navbar-nav me-auto">
          <li className="nav-b px-4">
            <a className="nav-link"><Greeting/></a>
          </li>
        </ul>
        {/* <div className="search-tab mx-5">
          <input
            type="text"
            placeholder="Search..."
           
            className="form-control me-2"
          />
        </div> */}
 
        <div className="image-container" style={{ marginRight: "370px" }}>
      
        <img src="https://github.com/Guruprasad-suvarna/Tensai/assets/83869639/021a7c9f-0d0f-4d65-91c1-7bc350e4387e" />
        <a className="navbar-brand ">ACFC Induction</a>
 
        </div>
        <div className="image-container" >
        <img src="https://github.com/Guruprasad-suvarna/Tensai/assets/83869639/205f0f53-1830-41e3-aa9c-c01146a4c9ee" style={{ width: "25px", height: "25px" }} />
      
 
        </div>


        <div className="profile-logo dropdown d-flex mx-5">
          <button
            className="btn btn-warning dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i class="fa-solid fa-user px-2"></i>
            User
          </button>
          <ul className="dropdown-menu dropdown-menu-light">
            <li>
              <a href="/" className="dropdown-item">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
 
export default Navbar;
 
