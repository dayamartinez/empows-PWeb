import React from 'react'
// import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Content from './components/Content'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, fas)

function App() {
  return (
    <div className='App h-100'>
      <NavBar />
      <Content />
      <Footer />
   
    </div>
  );
}

export default App;
