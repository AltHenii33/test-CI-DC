import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';
import ThemeRoutes from './src/router/Routes';


function App() {

  return (
    <div className="App">
      <ThemeRoutes />
    </div>
  );
}

export default App;
