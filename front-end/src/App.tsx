import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './AppRouter'
import "./App.css"
import "./view/bootstrap-themes/simplex.bootstrap.min.css"
class App extends React.Component{
    render(){
        return AppRouter;
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"));