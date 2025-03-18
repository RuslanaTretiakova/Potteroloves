import { Outlet } from 'react-router-dom';

import Footer from '@/widgets/footer';
import Header from '@/widgets/header';

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
