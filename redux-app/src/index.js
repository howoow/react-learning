import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import App from './components/app';
import { Provider } from 'react-redux';

const f1 = (state = 0, action) => {
  switch (action.type) {
    case 'add':
      return state + action.value;
    case 'sub':
      return state - action.value;
    default:
      return state;
  }
};

const f2 = (state = ":", action) => {
  switch (action.type) {
    case 'concat':
      return state + action.character;
    default:
      return state;
  }
};

const f3 = combineReducers({
  number: f1,
  string: f2,
})
//效果与下面代码等同

// const f3 = (state = {}, action) => {
//   return {
//     f1: f1(state.f1, action),
//     f2: f2(state.f2, action),
//   }
// };

const store = configureStore({
  reducer: f3
});

//store.subscribe(() => { console.log(store.getState()) }); //每更新一次state就执行一次订阅的函数

//通过store的dispatch函数，传入一个参数action，对整棵state树操作一遍。
//store.dispatch({type: "add", value: 1});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);