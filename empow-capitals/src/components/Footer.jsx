import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){
  return (
    
    <footer id='contacto' className='footerMob p-5 bg-light mx-0'>
      <h3 className='text-center mb-5'><em>Contáctanos<hr/></em></h3>
      <div className=' row justify-content-between'>

      <div className='col-md-3 text-center m-2'>
      <div className='align-self-center m-2'>
        <FontAwesomeIcon
          icon={['fas', 'phone-alt']}
          className='h3'
          style={{ color: 'DodgerBlue' }}
        />
      </div>
      <div className=' text-center'>
       <p><a href="tel:+5491137659120"> +54 9 11 3765 9120</a></p>    
       <a href="tel:+5491128498538"> +54 9 11 2849 8538</a>
      </div>
    </div>
     
   
    <div className='col-md-3 text-center m-4'>    
    <h6 className='mb-4 ml-2'><strong>Nuestras Redes</strong> </h6>    
           <a target="blank" href='https://www.facebook.com/empow.capitals'>
             <FontAwesomeIcon
                icon={['fab', 'facebook']}
                className='h2 mr-3'
                style={{ color: 'blue' }}
              />
          </a>            
              <a  target="blank" href="https://chat.whatsapp.com/KFGlQDJjW4DE2sjW5JrCt8">
            <FontAwesomeIcon
                icon={['fab', 'whatsapp']}
                className='h2 mr-3'
                style={{ color: 'green' }}
              />
              </a>
              <a target="blank" href='https://www.youtube.com/channel/UC1tjV2Ox6zEe4DLtpnkTTaQ?view_as=subscriber'>
            <FontAwesomeIcon
                icon={['fab', 'youtube']}
                className='h2 mr-3'
                style={{ color: 'red' }}
              />
              </a>
              <a target="blank" href="https://instagram.com/empowcapitals" >
                 <FontAwesomeIcon
                icon={['fab', 'instagram']}
                className='h2'
                style={{ color: '#e83e8c' }}
              />
              </a>
      </div>

      <div className='col-md-3 text-center m-2'>
      <div className='align-self-center m-2'>
        <FontAwesomeIcon
          icon={['fa', 'envelope']}
          className='h2 m-2'
          style={{ color: 'DodgerBlue' }}
        />
      </div>
      <div className=' text-center'>
       <p><a href="mailto:Empowcapitals@hotmail.com">Empowcapitals@hotmail.com</a></p>
      </div>
    </div>
    
    </div>
  </footer>

   
  )
} 
