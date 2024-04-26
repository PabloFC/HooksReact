// import React from 'react'
import ReactDOM from 'react-dom/client'
// import HooksApp from './HooksApp'
// import CounterApp from './01-useState/CounterApp'
// import CounterWithCusomHook from './01-useState/CounterWithCusomHook'
// import SimpleForm from './02-useEffect/SimpleForm'
// import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
// import FocusScreen from './04-useRef/FocusScreen'
// import './08-useReducer/intro-reducer'
// import TodoApp from './08-useReducer/TodoApp'


import MainApp from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <MainApp /> 
  </BrowserRouter>
  // </React.StrictMode>
)
