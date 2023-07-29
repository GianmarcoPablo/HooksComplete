import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import HooksApp from './HooksApp.jsx'
// import CounterApp from './01-useState/CounterApp'
// import CounterHook from './01-useState/CounterHook'
// import SimpleForm from './02-useEffect.jsx/SimpleForm'
// import FormHooks from './02-useEffect.jsx/FormHooks'
// import MultipleCustomHook from './03-example/MultipleCustomHook'
// import FocusScreen from './04-useRef/FocusScreen'
// import Layout from './05-useLayoutEffect/Layout'
// import Memorize from './06-memos/Memorize'
// import MemoHooks from './06-memos/MemoHook'
// import CallbackHook from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'


ReactDOM.createRoot(document.getElementById('root')).render(
    //<React.StrictMode>
        <Padre />,
    //</React.StrictMode>,
)