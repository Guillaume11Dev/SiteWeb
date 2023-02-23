import './App.css';
import Navbar from './Navbar/Navbar.js';
import Accueil from './pages/accueil.js';
import Contact from './pages/contact.js';
import { Route, Routes } from 'react-router-dom';
import Association from './pages/association';
import Voiture from './pages/voiture';


 export function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route path='/' element={<Accueil/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/association' element={<Association/>} />
        <Route path='/voiture' element={<Voiture/>} />
        


      </Routes>

    
    </div>
  )
}

export default App;
