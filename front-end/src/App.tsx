import ReactDOM from 'react-dom'

//jQuery
import "jquery/dist/jquery"

//bootstrap
import "bootstrap"
import "./view/bootstrap-themes/simplex/_entry.scss"

import "./App.css"

import AppRouter from './AppRouter'
ReactDOM.render(AppRouter,document.querySelector("#app"));