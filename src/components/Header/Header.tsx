import './header.scss'

export default function Header() {
  return (
    <header className="header">
        <img src="./public/header-logo-kropp.png" alt="" className="header_logo" />
        <ul className="header_list">
            <li className="header_list__item selected">Home</li>
            <li className="header_list__item">Pages</li>
            <li className="header_list__item">Portfolio</li>
            <li className="header_list__item">blog</li>
            <li className="header_list__item">Shop</li>
        </ul>
        <div className="header_buttons">
            <button className="header_button">Book now</button>
            <img src="./public/svg.qodef-svg--predefined-opener.svg" alt="dsds" />
        </div>
    </header>
  )
}
