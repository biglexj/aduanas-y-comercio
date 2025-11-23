import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const AppLayout: React.FC = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;