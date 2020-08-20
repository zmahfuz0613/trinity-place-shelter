import React from 'react'
import './HeaderNav.css'
import Logo from '../../../assets/Logo/Trinity-Logo.png'

function HeaderNav() {
  return (
    <div className="header-nav">
      <img src={Logo} alt="trinity place shelter logo" />
      <nav>
        <ul className="header-nav__container">
          <li>OUR STORY</li>
          <li>VOLUNTEER</li>
          <li>RESOURCES</li>
          <li>FAQ</li>
        </ul>
        <button className="header-nav__donateButton">DONATE</button>
      </nav>
    </div>
  )
}

export default HeaderNav
