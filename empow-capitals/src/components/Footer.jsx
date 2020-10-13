import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){
  return (
    <footer className='row p-4 bg-light mx-0 table-responsive' style={{position: 'fixed', bottom: 0 }} >
        <div className='text-light text-center' >
          {/* <h5 className='text-uppercase font-weight-light text-light mb-3'>
          </h5>      */}
            <FontAwesomeIcon
                icon={['fab', 'facebook']}
                className='h2 mr-4'
                style={{ color: 'blue' }}
              />
              <a  target="blank" href="https://chat.whatsapp.com/KFGlQDJjW4DE2sjW5JrCt8">
            <FontAwesomeIcon
                icon={['fab', 'whatsapp']}
                className='h2 mr-4'
                style={{ color: 'green' }}
              />
              </a>
            <FontAwesomeIcon
                icon={['fab', 'twitter']}
                className='h2 mr-4'
                style={{ color: 'DodgerBlue' }}
              />
              <a target="blank" href="https://instagram.com/empowcapitals" >
                 <FontAwesomeIcon
                icon={['fab', 'instagram']}
                className='h2'
                style={{ color: '#e83e8c' }}
              />
              </a>
           
        </div>
    </footer>
  )
}