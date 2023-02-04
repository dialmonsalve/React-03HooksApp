import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { SetFocus } from './04-useRef/SetFocus'
//import { Layout } from './05-useLayoutEffect/Layout'
//import './06-useReducer/intro-reducer'
//import { TodoApp } from './06-useReducer/TodoApp'
import { MainApp } from './07-useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
