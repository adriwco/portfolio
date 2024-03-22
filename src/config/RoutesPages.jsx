import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const RoutesPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPages;
