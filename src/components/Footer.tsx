import '../styles.scss'
export default function Footer() {
  return (
    <footer className="footer">
        <div className="qodef-grid-inner">
            <img src="./public/header-logo-kropp.png" alt="" className='qodef-grid-inner_logo'/>
            <p className="qodef-footer-logo-text">please feel free to send us an e-mail at kropp@qodeinteractive.com For any additional inquiries</p>
        </div>
        <ul className="footer-about">
            <li className="footer-about_li">
                <b className="footer-about_li__title">About</b>
                <div className="footer-about_li__text">Shape up your site with Kropp, a theme especially made for fitness & gym websites.</div>
            </li>
            <li className="footer-about_li">
                <b className="footer-about_li__title">Working hours</b>
                <div className="footer-about_li__text">Monday - Friday <div>05:30 - 24:00</div></div>
                <div className="footer-about_li__text">Weekdays <div>00:00 - 24:00</div></div>
            </li>
            <li className="footer-about_li">
                <b className="footer-about_li__title">Location</b>
                <div className="footer-about_li__text">68 Jay Street, Brooklyn, NY 11201, United States</div>
                <div className="footer-about_li__text">kropp@qodeinteractive.com <div>+ (1) 718 - 407 - 6400</div></div>
            </li>
            <li className="footer-about_li">
                <b className="footer-about_li__title">start now <img src="./public/leftArrow.svg" alt="" className='footer-about_li__title___img'/></b>
                <div className="footer-about_li__button">
                    Email <img src="./public/span.qodef-m-arrow.svg" alt="" className="footer-about_li__button___img"/>
                </div>
                <img src="./public/networks.svg" alt="" className="footer-about_li__networks"/>
            </li>
        </ul>
        <div className="footer-copyright"><img src="./public/footer-copyright.svg" alt="" className='footer-copyright_img'/></div>
    </footer>
  )
}
