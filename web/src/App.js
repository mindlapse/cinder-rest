import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Request from './components/Request'
import logo from './logo.svg';
import './App.css';
import reducers from './reducers/reducers'

let store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cinder REST</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        </p>
          <Provider store={store}>
              <Request />
          </Provider>
      </div>
    );
  }
}

export default App;
