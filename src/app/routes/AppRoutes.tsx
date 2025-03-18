import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../layout';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
