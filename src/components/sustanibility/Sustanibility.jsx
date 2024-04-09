import '../sustanibility/sustanibility.css'
import sus1 from '../../assets/sus-1.webp';
import sus2 from '../../assets/sus-2.webp';
export default function Sustanibility() {
    return <>
        <div className="sus-main">
            <div className="sus-title">
                <h1>Sustainability news</h1>
            </div>
            <div className="sus-cards">
                <div className="card">
                    <img src={sus1} alt="" />
                    <div className="sus-text">
                    <h2>On a mission to a world without waste</h2>
                    <p>we aim to collect back packaging for recycling equivalent to what we put out in the market by 2023</p>
                    <a href=""><h4>Learn more</h4></a>
                    </div>
                </div>
                <div className="card">
                    <img src={sus2} alt="" />
                    <div className="sus-text">
                    <h2>Promoting sustainable Agriculture</h2>
                    <p>Our effort are focused on improving the overall fruit availibility, increase farming efficiency as well as building food processing capacity in the country, thereby helping farmers increase their income.</p>
                    <a href=""><h4>Learn more</h4></a>
                    </div>
                </div>
            </div>
        </div>
    </>
}