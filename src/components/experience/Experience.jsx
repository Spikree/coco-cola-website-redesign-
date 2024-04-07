import '../experience/experience.css'
import image from '../../assets/exp-image.webp';

export default function Experience() {
    return <>
        <div className="experiences">
            <div className="header">
                <h1>Experiences</h1>
            </div>
            <div className="exp-main">
                <div className="exp-text">
                    <div className="text">
                        <h1>
                            Coke studio Bharat: Drink. Scan. Unlock Exclusive music
                        </h1>
                    </div>
                    <div className="btn">
                        <button>Explore now</button>
                    </div>
                </div>
                <div className="exp-image">
                <img src={image} alt="" />
                </div>
            </div>
            
        </div>
    </>
}