import './footer.scss'
import '../../styles.scss'
export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__grid-inner">
            <img src="./public/header-logo-kropp.png" alt="" className='footer__logo'/>
            <p className="footer__logo-text">please feel free to send us an e-mail at kropp@qodeinteractive.com For any additional inquiries</p>
        </div>
        <ul className="footer__about">
            <li className="footer__about-item">
                <b className="footer__about-title">About</b>
                <div className="footer__about-text">Shape up your site with Kropp, a theme especially made for fitness & gym websites.</div>
            </li>
            <li className="footer__about-item">
                <b className="footer__about-title">Working hours</b>
                <div className="footer__about-text">Monday - Friday <div>05:30 - 24:00</div></div>
                <div className="footer__about-text">Weekdays <div>00:00 - 24:00</div></div>
            </li>
            <li className="footer__about-item">
                <b className="footer__about-title">Location</b>
                <div className="footer__about-text">68 Jay Street, Brooklyn, NY 11201, United States</div>
                <div className="footer__about-text">kropp@qodeinteractive.com <div>+ (1) 718 - 407 - 6400</div></div>
            </li>
            <li className="footer__about-item">
                <b className="footer__about-title">start now <img src="./public/leftArrow.svg" alt="" className='footer__title-img'/></b>
                <div className="footer__button">
                    Email <img src="./public/span.qodef-m-arrow.svg" alt="" className="footer__button-icon"/>
                </div>
                <img src="./public/networks.svg" alt="" className="footer__networks"/>
            </li>
        </ul>
        <div className="footer__copyright"><img src="./public/footer-copyright.svg" alt="" className='footer__copyright-img'/></div>
    </footer>
  )
}