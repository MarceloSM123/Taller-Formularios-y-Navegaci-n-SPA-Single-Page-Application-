import { useState } from 'react'
import videojuegosData from './data/videojuegos';
import TablaVideojuegos from './components/TablaVideojuegos';
import './App.css'

function App() {
  
  const [videojuegos] = useState(videojuegosData);

  return (
    <div className="App">
      <TablaVideojuegos videojuegos={videojuegos} />
    </div>
  );
  
}

export default App
