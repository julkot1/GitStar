import "./fontello/css/fontello.css"
import "./fontello/css/animation.css"
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Content from './components/content/Content';
import Footer from './components/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Content/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
//    <Ranking />
//



