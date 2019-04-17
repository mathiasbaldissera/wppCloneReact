import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDekXYmFrpDzp7WROkuIg1naxgVi8A7PBA',
      authDomain: 'app9wp.firebaseapp.com',
      databaseURL: 'https://app9wp.firebaseio.com',
      projectId: 'app9wp',
      storageBucket: 'app9wp.appspot.com',
      messagingSenderId: '268208958636'
    });
  }

  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
