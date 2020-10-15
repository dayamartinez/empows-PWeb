import React from 'react'
// import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Widget from './components/Widget'
import Content from './components/Content'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, fas)

function App() {
  return (
    <div>
      <NavBar />
      <Widget />
      <Content />
      <Footer />
      {/* <Route path='/' render={() => <NavBar />} />
      <Route path='/' render={() => <Footer />} /> */}
    </div>
  );
}

export default App;
