import './video.css'
import video from '../../assets/video.webm';
import coke from '../../assets/coke.png';
import { useRef } from 'react';

export default function Video() {
    const videoRef = useRef(null);

    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    return <>
        <div className='video-main'>
            <video autoPlay loop onMouseOver={playVideo} onMouseEnter={playVideo} controls>
                <source src={video} type="video/webm" />
            </video>
            <div className='image-holder'>

            <div className="coke-image">
                <img src={coke} alt="" />
            </div>

            <div className="btn-div">
            <button className='btn'>Buy now</button>
            </div>

            </div>
        </div>
    </>
}