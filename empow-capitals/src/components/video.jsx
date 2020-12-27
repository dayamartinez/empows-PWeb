import React from 'react'
import './style.css'

export default function video(){
    return (
        
        <div className='bgvideo'>
             <div className="video">
                <iframe id="player" frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%"
                src="https://www.youtube.com/embed/xE5ZdFEnHgk?autoplay=1&enablejsapi=1"
                data-gtm-yt-inspected-1_25="true">
                </iframe>
            </div>
        </div>
    
    )
}
