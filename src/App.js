import Addusers from './Components/Addusers';
import Allusers from './Components/Allusers';
import Home from './Components/Home';
import Navbar from './Components/NavBar';
import NotFound from './Components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/all" element={<Allusers />} />
      <Route exact path="/add" element={<Addusers />} />
      <Route  element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
