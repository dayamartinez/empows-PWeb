import React from 'react'
import { Card, Button} from 'react-bootstrap'
import Video from './video'
import Widget from './Widget'
import NavBar from './NavBar'
import Contact from './Contact'
import './style.css'

export default function content(){

    let pack = [
                {name: 'Paquete de 1 mes', price:'U$S 29,00'},
                {name: 'Paquete de 3 meses', price:'U$S 59,00'},
                {name: 'Paquete de 1 año', price:'U$S 99,00'},
                {name: 'Paquete de LifeTime', price:'U$S 149,00'}
            ]

    return (
        <div className='contenedor' >
            <NavBar />
            <Widget/>
                       
            <section id='premium' className='section' >         
                <div className="service" id="services">            
                    <div className="container">
                        <Video/>   
                    </div>          
                    <h3 className="ml-5 mt-5">Señales Premium</h3>    
                    <div  className='señales'>                    
                        {pack && pack.map(p => (
                        <div  key={p.name} className='cards'>
                            <Card key={p.name} className='card text-center' bg="light" >
                            <Card.Header as='h4'> {p.name} </Card.Header>
                            <Card.Body>                        
                                <Card.Text><span> 3-5 señales por día <br/>
                                    Acceso instantaneo al servicio premium</span>                                
                                    <h5 className='cardpaq'> {p.price}</h5>                                
                                </Card.Text>
                                <Button variant='danger'size="sm"  href="https://wa.me/message/Y44OPABP27DTD1" block>Solicitar Compra</Button>
                            </Card.Body>
                            </Card>
                        </div>
                        ))}
                    </div>        
                </div>
            </section>

            <section id='gestion-de-capital' className='section'>
                <div className='fondoGC' >
                <div className='datosGC'>
                    <Card.Body>  
                        <h3>Gestión de Capital</h3><hr/>
                    <Card.Text>
                        <li>Servicio de Gestión de Capital.</li>
                        <li>Inversion mínima u$s2.000,00</li>
                        <li>Drawdown: Máximo 10%</li>
                        <li>Rentabilidad hasta 10% anual</li>
                    </Card.Text>  
                    <Button variant='danger' size="sm" href="https://wa.me/message/Y44OPABP27DTD1">
                    Solicitar
                    </Button>                  
                </Card.Body>
                </div>
                </div>
            </section>
           
            <section className='section mt-5'id='cursos'> 
                    <h3 className='text-center'> Cursos</h3><hr/>
                <div className='señales'>                     
                    <div className='section mb-4 mr-5'>
                        <Card className='card bg-white' >
                            <Card.Body>
                                <h4> Análisis Técnico</h4> <hr/>                       
                                <Card.Text>
                                    <p>En este curso intensivo recibiras todo lo necesario paralograr un completo análisis del Mercado Bursátil 
                                        (aplica para cualquier gráfico financiero).</p>
                                    <ul>                                
                                        <li>Análisis Técnico.</li>
                                        <li>Gestión de Riesgo.</li>
                                        <li>Gestión Operativa.</li>
                                        <li>Perfil del Trader.</li>
                                        <li>Psicología Correcta.</li>
                                        <li>Cuenta Auditada.</li>
                                        <li>Seguimiento Extra.</li>
                                        <li>Clases en vivo + Canal Premium.</li>                   
                                    </ul>           
                                </Card.Text> 
                                <h5 className='cardpaq mt-4'> U$S 129,00</h5>
                                <Button variant='danger' size="sm" href="https://wa.me/message/Y44OPABP27DTD1">Solicitar Compra</Button>
                            </Card.Body>
                        </Card>      
                    </div>           
               
                    <div className='section mb-4 mr-5'  >
                    <Card className='card bg-white' >
                            
                            <Card.Body>  
                                <h4>Ondas de Elliot</h4> <hr/>                     
                                <Card.Text>
                                    <p> En este curso intensivo aprenderas el correcto conteo de las ondas en los mercados</p>
                                    <ul>                                
                                        <li>Figuras.</li>
                                        <li>Clases en vivo.</li>
                                        <li>Teoría de Elliot.</li>   
                                        <li>Cuenta Auditada.</li>
                                        <li>Gestión de Riesgo.</li>
                                        <li>Seguimiento Extra.</li>
                                        <li>Tiempo-Patrón-Coeficiente.</li>
                                        <li>Gestión Operativa para Ondas.</li>
                                        <li>Como iniciar un Conteo de Ondas.</li>
                                        <li>Mentoria 1-1 para pulir errores.</li>                
                                    </ul>           
                                </Card.Text> 
                                <h5 className='cardpaq'> U$S 129,00</h5>
                                <Button variant='danger' size="sm" href="https://wa.me/message/Y44OPABP27DTD1">Solicitar Compra</Button>
                            </Card.Body>
                        </Card>  
                    </div>  
                             
                    <div className='section mb-4'>
                    <Card className='card bg-white'  >
                            <Card.Body> 
                                <h4>Patrones Armónicos</h4> <hr/>                      
                                <Card.Text>
                                    <p>Curso intensivo para aprender a operar en cualquiera de los mercados financieros la operativa del trading Armónico.
                                    <br/>En el curso daremos desde conceptos básicos hasta la operativa avanzada.
                                    <br/>Trabajaremos con una estrategia altamente efectiva y foco en la buena gestión + psicología. 
                                    </p>
                                    <ul>                                
                                        <li>Canal de señales premium.</li>
                                        <li>Comunidad de WhatsApp.</li>
                                        <li>PDF y libros de estudio.</li>
                                        <li>Clases en vivo 3 a 4 veces por semana.</li>           
                                        <li>Creación y Seguimiento de cuenta Auditada.</li>                     
                                    </ul>        
                                </Card.Text> 
                                <h5 className='cardpaq mt-4'> U$S 129,00</h5>
                                <Button variant='danger' size="sm" href="https://wa.me/message/Y44OPABP27DTD1">Solicitar Compra</Button>
                            </Card.Body>
                        </Card>   
                    </div>   
                </div>
            </section>

            <section id='mentoria' className='section'>
                <div className='fondomentoria' >
                    <div className='datosmentoria'>
                    <Card.Body >
                    <h4>Mentoria 1-1</h4><hr/>
                    <p> Las mentorías 1-1 están enfocadas a un trabajo y seguimiento personalizado a partir 
                    de la base y operativa que tenga el trader.
                    <br/>Trabajamos en tiempo real con el mercado durante 1 hora y media por día, 3 días a la semana con el objetivo de identificar 
                    <br/>las debilidades y fortalezas a la hora de realizar un análisis y ejecutar una operación.
                    </p>
                    <p >
                    El fin de la mentoría es pulir los errores técnicos y psicológicos para que el 
                        trader se sienta seguro a la hora de realizar sus operativas.
                    </p>   
                    <Card.Text>
                        <li>Duración: 1 mes</li>                    
                        <li>Acceso al canal de señales premium</li>
                        <li>Mentoría para cualquier mercado que opere el trader</li> 
                    </Card.Text>
                    <Button variant='danger' size="sm"  href="https://wa.me/message/Y44OPABP27DTD1">Solicitar</Button>
                </Card.Body>
                </div>
                </div>         
            </section>  

           <Contact/>                     
        </div>
    )
}


