import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';

function App() {
   return (
      <div>
         <nav>
            <Link to="/">Home</Link> | <Link to="/Sobre">Sobre</Link>
         </nav>

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sobre" element={<Sobre />} />
         </Routes>
      </div>
   );
}

export default App;
