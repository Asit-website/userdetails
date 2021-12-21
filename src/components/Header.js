import React from 'react'
import user from '../img/user.png';
const Header = () => {
    return (
        <>
          <nav className="navbar">
              <div className="logo">
                <img src={user} alt="not" />
              </div>

              <div className="head">
               
                 <p>Get all The <span style={{color:"red"}}>profile of user</span> </p>
              </div>

              <div  className="navbar-details">
               <a target='_blank' href="https://api.github.com/users">
                <button>Get api</button>
                </a>
              </div>
          </nav>  
        </>
    )
}

export default Header
