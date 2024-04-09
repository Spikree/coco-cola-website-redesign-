import '../explore/explore.css'
import Card from './Card'
import cardData from './cardData'

export default function Explore() {
    return <>
        <div className='explore-main'>
            <div className="exp-title">
                <h1>
                    Explore our brands
                </h1>
            </div>
            <div className="exp-cards">
                {
                    cardData.map((card) => {
                        return <Card
                        key={card.id}
                        imageLink = {card.imageUrl}
                        />
                    })
                }
            </div>
            <div className="button">
                <button>View All</button>
            </div>
        </div>
    </>
}