import React from 'react'
import { Card, Button, Row, Col, Container} from 'react-bootstrap'
import Video from './video'
import Widget from './Widget'
import './style.css'

export default function content(){
    const colorBut = { backgroundColor: 'rgba(163, 24, 0, 0.829)' }
    const cards = {width: '18rem', height: '20rem' , marginRight:'15px'}
    const conteiner = { display:'flex', flexDirection: 'row', margin: '20px'}

    let pack = [
                {name: 'Paquete de 1 mes', price:'U$S 29,00'},
                {name: 'Paquete de 3 meses', price:'U$S 59,00'},
                {name: 'Paquete de 1 año', price:'U$S 99,00'},
                {name: 'Paquete de LifeTime', price:'U$S 149,00'}
            ]

    return (
        <div >
            <Widget/>
            <Video/>            
            <section id='premium' className='señal' >
                <h3>Señales Premium</h3><hr/>
                <Container style={conteiner}>                    
                    { pack && pack.map(p => (
                          <Row >
                          <Col xs={12} md={8}> 
                          <Card className='card text-center' bg="light" style={cards} >
                            <Card.Header> <h4 className='cardpaq'>{p.name} </h4> </Card.Header>
                            <Card.Body>                        
                                <Card.Text><p> 3-5 señales por día <br/>
                                     Acceso instantaneo al servicio premium</p>                                
                                    <h5 className='cardpaq'> {p.price}</h5>                                
                                </Card.Text>
                                <Button style={colorBut} size="sm" block>Solicitar Compra</Button>
                            </Card.Body>
                        </Card>
                        </Col>  
                        </Row>
                    ))}
                </Container>    
            </section>

            <section id='gestion-de-capital' className='section'>
                <div className='bcg' >
                <div className='datos'>
                    <Card.Body>  
                        <h3>Gestión de Capital</h3><hr/>
                    <Card.Text>
                        <li>Servicio de Gestión de Capital.</li>
                        <li>Inversion mínima u$s2.000,00</li>
                        <li>Drawdown: Máximo 10%</li>
                        <li>Rentabilidad hasta 10% anual</li>
                    </Card.Text>                    
                </Card.Body>
                <Button style={colorBut} size="sm">Consultar</Button>
                </div>
                </div>
            </section>

            
                <section id='analisis-tecnico' className='section'>
                    <div>                                         
                        <Card.Body> 
                            <h4>Análisis Técnico</h4><hr/>
                        <p>En este curso intensivo recibiras todo lo necesario paralograr un completo análisis del Mercado Bursátil
                        <br/>(Aplica para cualquier gráfico financiero)</p>  
                        <Card.Text>
                            <li>Análisis Técnico.</li>
                            <li>Gestión de Riesgo.</li>
                            <li>Gestión Operativa.</li>
                            <li>Perfil del Trader.</li>
                            <li>Psicología Correcta.</li>
                            <li>Cuenta Auditada.</li>
                            <li>Seguimiento Extra.</li>
                            <li>Clases en vivo + Canal Premium.</li>                     
                        </Card.Text>
                        <h5> U$S 129,00</h5>
                        <Button style={colorBut} size="sm">Solicitar Compra</Button>
                        </Card.Body> 
                    </div>           
                </section>

                <section id='ondas-de-elliott' className='section'>
                    <div>                                           
                        <Card.Body>
                        <h4>Ondas de Elliot</h4><hr/>
                        <p>En este curso intensivo aprenderas el correcto conteo de las ondas en los mercados</p>  
                        <Card.Text>
                            <li>Clases en vivo</li>
                            <li>Teoría de Elliot.</li>
                            <li>Tiempo-Patrón-Coeficiente.</li>
                            <li>Figuras.</li>
                            <li>Como iniciar un Conteo de Ondas.</li>
                            <li>Gestión Operativa para Ondas</li>
                            <li>Gestión de Riesgo.</li>
                            <li>Cuenta Auditada.</li>
                            <li>Seguimiento Extra.</li>
                            <li>Mentoria 1-1 para pulir errores.</li>
                        </Card.Text>
                        <h5> U$S 129,00</h5>  
                        <Button style={colorBut} size="sm">Solicitar Compra</Button>
                        </Card.Body>
                    </div>           
                </section>

                <section id='patrones-armonicos' className='section'> 
                    <div>                
                    <Card.Body>
                        <h4>Patrones Armónicos</h4><hr/>
                        <p>Curso intensivo para aprender a operar en cualquiera de los mercados financieros la operativa del trading Armónico
                        <br/>En el curso daremos desde conceptos básicos hasta la operativa avanzada.
                        <br/> Trabajaremos con una estrategia altamente efectiva y foco en la buena gestión + psicología. 
                        </p>  
                        <Card.Text>
                            <li>Clases en vivo 3 a 4 veces por semana.</li>
                            <li>Canal de señales premium.</li>
                            <li>Comunidad de WhatsApp.</li>
                            <li>PDF y libros de estudio.</li>             
                            <li>Creación y Seguimiento de cuenta Auditada.</li>                
                        </Card.Text>
                        <h5 > U$S 129,00</h5>   
                        <Button style={colorBut} size="sm">Solicitar Compra</Button>
                    </Card.Body> 
                    </div>           
                </section>
                
          


            <section id='mentoria' className='section'>
                <div >
                <h4>Mentoria 1-1</h4><hr/>
                    <Card.Body>
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
                    <li>Mentoría para cualquier mercado que opere el trader</li>
                    <li>Duración: 1 mes</li>
                    <li>Acceso al canal de señales premium</li>
                    </Card.Text>
                    <Button style={colorBut} size="sm" >Solicitar</Button>
                </Card.Body>
                </div>           
            </section>

        </div>
    )
} 