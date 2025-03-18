import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../layout';
import NotFound from '@/pages/not-found';
import HomePage from '@/pages/home';
import Books from '@/pages/books';
import Spells from '@/pages/spells/insex';
import Characters from '@/pages/characters';
import Houses from '@/pages/houses/insex';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
