import React from 'react'
import { Card, Button, Row, Col, Container} from 'react-bootstrap'

export default function content(){
   let pack = [
                {name: 'Paquete de 1 mes', price:'u$s29'},
                {name: 'Paquete de 3 meses', price:'u$s59'},
                {name: 'Paquete de 1 año', price:'u$s99'},
                {name: 'Paquete de LifeTime', price:'u$s149'}
            ]

    return (
        <div className='table-responsive' style={{marginTop: '20px'}}>

            <section id='señales-premium' className='section' >
                <Card.Header as="h4">Señales Premium</Card.Header>
                <Container style={{ display:'flex', flexDirection: 'row', margin: '20px'}}>
                    
                    { pack && pack.map(p => (
                          <Row>
                          <Col xs={12} md={8}> 
                          <Card className='card text-center' bg="light" style={{ width: '16rem', marginRight:'10px'}} >
                            <Card.Header> <h6>{p.name} {p.price} </h6> </Card.Header>
                            <Card.Body>                        
                                {/* <Card.Text></Card.Text> */}
                                <Button variant="primary" size="sm" block>Solicitar Compra</Button>
                            </Card.Body>
                        </Card>
                        </Col>  </Row>
                    ))}
                </Container>    
            </section>

            <section id='gestion-de-capital' className='section'>
                <Card.Header as="h4">Gestión de Capital</Card.Header>
                    <Card.Body>  
                    <Card.Text>
                    <li>Servicio de Gestión de Capital.</li>
                    <li>Inversion mínima u$s2.000,00</li>
                    <li>Drawdown: Máximo 10%</li>
                    <li>Rentabilidad hasta 10% anual</li>
                    </Card.Text>
                </Card.Body>
            </section>

            <section id='cursos'>
                <section id='analisis-tecnico' className='section'>
                    <Card.Header as="h4">Análisis Técnico</Card.Header>
                    <Card.Body>
                    <p>En este curso intensivo recibiras todo lo necesario paralograr un completo análisis del Mercado Bursátil
                    <br/>(Aplica para cualquier gráfico financiro)</p>  
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
                    <Button variant="dark">u$s129</Button>
                    </Card.Body>           
                </section>

                <section id='ondas-de-elliott' className='section'>
                    <Card.Header as="h4">Ondas de Elliot</Card.Header>
                    <Card.Body>
                    <p>En este curso intensivo aprenderas el correcto conteo de las ondas en los mercados
                    </p>  
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
                    <Button variant="dark">u$s129</Button>
                    </Card.Body>           
                </section>

                <section id='patrones-armonicos' className='section'>
                    <Card.Header as="h4">Patrones Armónicos</Card.Header>
                    <Card.Body>
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
                    <Button variant="dark">u$s129</Button>
                    </Card.Body>           
                </section>
            </section>


            <section id='mentoria' className='section'>
                <Card.Header as="h4">Mentoria 1-1</Card.Header>
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
                    <Button variant="dark">Solicitar</Button>
                </Card.Body>           
            </section>

        </div>
    )
} 