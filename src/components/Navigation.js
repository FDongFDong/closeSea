import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Explore from '../pages/Explore';
import styles from './Navigation.css';

const navigation = () => {
  return (
    <>
      <nav class="navigation">
        <div class="opensea_logo"></div>
        <div class="link">
          <Link to="/about">Explore</Link>
          <Link to="/about">Stats</Link>
          <Link to="/about">Resources</Link>
          <Link to="/about">Create</Link>
          <Link to="/wallet">Wallet</Link>
        </div>
      </nav>
    </>
  );
};

export default navigation;
