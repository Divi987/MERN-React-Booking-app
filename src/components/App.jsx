import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import Routess from './Routess';
// Import style
import '../assets/css/style.css';

const App = () => (
  <div className="App">
    <HttpsRedirect>
      <Routess />
    </HttpsRedirect>
  </div>
);

export default App;
