import React from 'react';

import Footer from './footer';

import { rhythm } from '../utils/typography';
import Header from './header';
import Sidebar from './sidebar';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#0A1128',
      color: '#F2E9E4',
    }}
    >
      <Sidebar isRoot={location.pathname === rootPath} />
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header isRoot={location.pathname === rootPath} title={title} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
