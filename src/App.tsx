import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

// Importing all Components
import HeaderComponent from './Components/layout/HeaderComponent'
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';
import Alert from "./Components/layout/Alert";

import GlobalState from './Context/Global/GlobalState';
import AlertState from './Context/Alert/AlertState';

import firebase from './firebase';

const App:React.FC = () => {

  useEffect(() => {
    const messaging = firebase.messaging();
    messaging.requestPermission().then(() => {
      return messaging.getToken();
    }).then(token => {
      console.log('token', token);
    }).catch(err => {
      console.error('error', err)
    })
    // eslint-disable-next-line
  }, []);

  return (
    <GlobalState>
      <AlertState>
        <Router>
          <div className="App">
            < HeaderComponent/>
            <Routes>
              {/* Route for Home Page */}
              <Route path='/' element={<Home/>}/>
              {/* Route for About Page */}
              <Route path='/about' element={<About/>}/>
              {/* Route for Not Found Page */}
              <NotFound />
            </Routes>
            <Alert/>
          </div>
        </Router>
      </AlertState>
    </GlobalState>
  );
}

export default App;