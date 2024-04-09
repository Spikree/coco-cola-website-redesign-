import '../footer/footer.css'
import logo1 from '../../assets/logo-white-large.svg'

export default function Footer() {
    return <>
        <div className='footer-main'>
            <div className="row-1">
                <img src={logo1} alt="" />
                <button>India | English</button>
            </div>
            <hr />
            <div className="row-2">
            <div className="options">
                <div className="about-us">
                    <ul>
                        <li className='li-1'>About us</li>
                        <li>Our company</li>
                        <li>Media center</li>
                        <li>History</li>
                        <li>Careers</li>
                        <li>Leadership</li>
                    </ul>
                </div>
                <div className="need-help">
                        <ul>
                            <li className='li-1'>Need help</li>
                            <li>FAQ</li>
                            <li>Sitemap</li>
                            <li>Contact us</li>
                        </ul>
                </div>
                <div className="terms-of-use">
                    <ul>
                        <li>Terms of use</li>
                        <li>Privacy policy</li>
                        <li>Financial & policy Documents</li>
                    </ul>
                </div>
            </div>
            </div>
            <hr />
            <div className="row-3">
                <p>© 2024 The Coca‑Cola Company. All rights reserved.</p>
            </div>
        </div>
    </>
}