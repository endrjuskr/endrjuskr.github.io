import React from 'react';

import Footer from './footer';

import { rhythm } from '../utils/typography';
import useMediaQuery from '../utils/media-hook';
// import Header from './header';
import Sidebar from './sidebar';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  const isLarge = useMediaQuery('(min-width: 1300px)');

  return (
    <div style={{
      display: 'flex',
      height: '100%',
      flexDirection: isLarge ? 'row' : 'column',
      backgroundColor: '#0A1128',
      color: '#F2E9E4',
      overflowY: 'scroll',
      paddingTop: rhythm(2),
      paddingBottom: rhythm(2),
    }}
    >
      <Sidebar isLarge={isLarge} isRoot={location.pathname === rootPath} />
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: isLarge ? `${rhythm(1.5)} ${rhythm(3 / 4)}` : `${rhythm(1 / 2)} ${rhythm(3 / 4)}`,
        }}
      >
        {/* <Header isRoot={location.pathname === rootPath} title={title} /> */}
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
