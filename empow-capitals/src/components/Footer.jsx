import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){
  return (
    <footer id='social' className='row p-4  mx-0 table-responsive' 
    style={{position: 'relative', bottom: 0 }} >
        <div className='text-light text-center' >
          <h5 className='text-uppercase font-weight-dark text-dark mb-3'>
            Nuestras Redes
          </h5>     
          <a target="blank" href='https://www.facebook.com/empow.capitals'>
            <FontAwesomeIcon
                icon={['fab', 'facebook']}
                className='h1 mr-4'
                style={{ color: 'blue' }}
              />
          </a>
            
              <a  target="blank" href="https://chat.whatsapp.com/KFGlQDJjW4DE2sjW5JrCt8">
            <FontAwesomeIcon
                icon={['fab', 'whatsapp']}
                className='h1 mr-4'
                style={{ color: 'green' }}
              />
              </a>
              <a target="blank" href='https://www.youtube.com/channel/UC1tjV2Ox6zEe4DLtpnkTTaQ?view_as=subscriber'>
            <FontAwesomeIcon
                icon={['fab', 'youtube']}
                className='h1 mr-4'
                style={{ color: 'red' }}
              />
              </a>
              <a target="blank" href="https://instagram.com/empowcapitals" >
                 <FontAwesomeIcon
                icon={['fab', 'instagram']}
                className='h1 mr-4'
                style={{ color: '#e83e8c' }}
              />
              </a>
           
        </div>
    </footer>
  )
}