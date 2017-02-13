import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Request from './components/Request'
import './App.css';
import reducers from './reducers/reducers'

let store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Cinder REST</h2>
        </div>
          <br />
          <Provider store={store}>
              <Request />
          </Provider>
      </div>
    );
  }
}

export default App;
