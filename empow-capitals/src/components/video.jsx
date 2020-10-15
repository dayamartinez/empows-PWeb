import React from 'react'
import './style.css'

export default function video(){
    return (
        <div className='slide'>
        <div className='bgvideo'>
             <div className="video">
                <iframe id="player" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="853" height="480"
                src="https://www.youtube.com/embed/hvmCtlX4o4I"
                data-gtm-yt-inspected-1_25="true">
                </iframe>
            </div>
        </div>
      </div> 
    )
}
//<iframe  src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> data-gtm-yt-inspected-1_25="true">