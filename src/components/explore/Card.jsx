import '../explore/explore.css'

export default function Card(props) {
    return <>
        <div className='card-main'>
            <div className="inner-card">
               <img src={props.imageLink} alt="" />
            </div>
        </div>
    </>
}