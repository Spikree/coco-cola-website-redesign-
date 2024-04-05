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
            <video autoPlay loop onMouseOver={playVideo}>
                <source src={video} type="video/webm" />
            </video>
            {/* <div className="coke-image">
                <img src={coke} alt="" />
            </div> */}
        </div>
    </>
}