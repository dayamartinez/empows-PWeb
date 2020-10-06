import React from 'react';
import NavBar from './components/NavBar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, fas)

function App() {
  return (
    <div>
     <NavBar/>
    </div>
  );
}

export default App;
