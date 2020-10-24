import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function contact(){
    return (
        <div className='column'>
             <section id='contacto' className='ml-5 mt-5 mb-5'>
            <div className="col-lg-4 col-md-5 col-sm-5 contact-icons">
                <h5>Contacto </h5>
                <div className="footer_grid_left row">
                    <div className="col-lg-3 col-md-3 col-sm-3 icon_grid_left">                        
                        <FontAwesomeIcon icon={['fa', 'phone-volume']} className='h2'
                        style={{ color: '#wh' }} />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 address-gried">
                        <p> +54 9 11 3765 9120</p>
                        <p> +54 9 11 2849 8538</p>
                    </div>                     
                </div>

                <div className="footer_grid_left row">    
                    <div className="col-lg-3 col-md-3 col-sm-3 icon_grid_left">                        
                        <FontAwesomeIcon icon={['fa', 'envelope']} className='h3'
                        style={{ color: '#wh' }} />
                    </div>                     
                    <div className="col-lg-9 col-md-9 col-sm-9 address-gried">
                        <p><a href="mailto:Empowcapitals@hotmail.com">Empowcapitals@hotmail.com</a>
                        </p>
                    </div>
                </div>
            </div> 
           <div className="footer_grid_left column">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.736278123703!2d-58.54980494952265!3d-34.63610416662277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc80f46b25aa1%3A0x9913a8c891a8c762!2sF%C3%A9lix%20Ballester%20442%2C%20B1702FZH%20Ciudadela%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1603522364101!5m2!1ses-419!2sar" 
            width="250" height="200" frameBorder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabindex="0">
                </iframe>               
        </div> 
        </section> 
        </div>
    )
}