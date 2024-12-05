import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage/homepage';
import About from './Pages/About/about';
import Team from './Pages/Team/team';
import Contacts from './Pages/Contacts/contacts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/inicio" element={<Homepage />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/equipa" element={<Team />} />
          <Route path="/contactos" element={<Contacts />} />
        </Routes>
      </Router>
  );
}

export default App;
