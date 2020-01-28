import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import PortfolioPage from './components/portfolioPage/portfolioPage'
import AboutMePage from './components/aboutMePage/aboutMePage'

const routes = [
  { path: '/portfolio', name: 'portfolio', Component: PortfolioPage },
  { path: '/about', name: 'about', Component: AboutMePage },
 
]

function App() {
  return (
    <div className="App">
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          <Component />
        </Route>
      ))}
    </div>
  );
}

export default App;
