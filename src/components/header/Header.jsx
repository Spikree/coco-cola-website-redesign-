import './header.css'
import logo from '../../assets/Coke-company-logo-black.svg';

function Header() {
    return <>
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Brands</li>
                    <li>Discover</li>
                    <li>Impact</li>
                    <li>Shop</li>
                </ul>
            </div>
        </header>
    </>
}

export default Header;