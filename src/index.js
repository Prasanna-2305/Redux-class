import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './employee';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const employeeData={
  salary:15000
};

const reducer=(state=employeeData,action)=>{
  switch(action.type){
    case 'INCREMENT':
      return {salary:state.salary + 1000};

    case 'DECREMENT':
      return {salary:state.salary - 1000};

    default:
      return state;
  }
}
const store=createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Employee></Employee>
  </Provider>
);

ReactDOM.render(<App></App>,document.getElementById("root"));