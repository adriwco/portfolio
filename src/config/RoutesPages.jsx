import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Experiencia from '../pages/Experiencia';
import Formacao from '../pages/Formacao';
import Contato from '../pages/Contato';

const RoutesPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/formacao" element={<Formacao />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPages;
