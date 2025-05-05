import './header.scss'
import '../../styles.scss'
import Button from '../Button/Button'
import { type } from '../../types'

export default function Header() {
  return (
    <header className="header">
      <img 
        src="./public/header-logo-kropp.png" 
        alt="Kropp logo" 
        className="header__logo" 
      />
      
      <ul className="header__nav-list">
        <li className="header__nav-item header__nav-item--selected">Home</li>
        <li className="header__nav-item">Pages</li>
        <li className="header__nav-item">Portfolio</li>
        <li className="header__nav-item">Blog</li>
        <li className="header__nav-item">Shop</li>
      </ul>
      
      <div className="header__actions">
        <Button variant={type.Secondary}>Book Now</Button>
        <button className="header__burger-button">
          <span className="header__burger-button-line"></span>
          <span className="header__burger-button-line"></span>
          <span className="header__burger-button-line"></span>
        </button>
      </div>
    </header>
  )
}