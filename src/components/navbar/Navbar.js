import React, { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import { SiAnaconda } from 'react-icons/si';
import './navbar.css';

const Navbar = () => {

  const [showicon , setshowicon] = useState(false);

  const togglemenu = () => {
    setshowicon(!showicon)
  }

  return (
    <nav className='navbar-container'>
      <div className='menu'>
        <ul className='nav-links' id={showicon ? "show-links-mobile" : "show-links-mobile-hide"}>
          <li><a href='' className='btn btn-dark'>آموزش بیشتر</a></li>
          <li><a href=''>خانه</a></li>
          <li><a href=''>امکانات</a></li>
          <li><a href=''>دانلود</a></li>
          <li><a href=''>مشترک شوید</a></li>
        </ul>
      </div>
      <div className='logo'>
        <SiAnaconda color='#fff' size={30} />
        <p className='logo-text'>
          Social
          <span>X</span>
        </p>
      </div>

      <div className='menu-icons' onClick={togglemenu}>
        {
          showicon ? 
          <RiCloseLine size={35} color='#fff' cursor={'pointer'}/>
          :
          <AiOutlineBars size={35} color='#fff' cursor={'pointer'} />
            
        }
      </div>
    </nav>
  )
}

export default Navbar