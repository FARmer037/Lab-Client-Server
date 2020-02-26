import React from 'react';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import './App.css';
import Count from './components/Count';

export const add = () => ({type: 'ADD'})
export const minus = () => ({type: 'MINUS'})

export const numberReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
      case 'MINUS':
        return state - 1
      default:
        return state
  }
}

export const rootReducer = combineReducers({number: numberReducer})
export const store = createStore(rootReducer)

function App() {
  return (
    <div className="App">
      <Count />
    </div>
  );
}

export default App;
