import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import Nav from './components/Nav'
import Plant from './components/Plant'
import Houseplant from './components/Houseplant';
import Picture from './components/Picture';
import { Grid } from './components/Grid';
import reportWebVitals from './reportWebVitals';
import { Reviews } from './components/Reviews';
import { Photo } from './components/Photo';
import { Foot } from './components/Foot';
// import { Plants } from './plants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Nav/>
  <Plant/> 
  <Houseplant/>
  <Picture/>
  <Grid/>
  <Reviews/>
  <Photo/>
  <Foot/>
  </React.StrictMode>
);


reportWebVitals();

