import ReactDOM from 'react-dom'

//jQuery
import "jquery/dist/jquery"

//bootstrap
import "bootstrap"
import "./view/css/bs-simplex/_entry.scss"

//rsuite
import 'rsuite/dist/styles/rsuite-default.css';

import "./App.css"

import OfflinePluginRuntime from "offline-plugin/runtime"
OfflinePluginRuntime.install();

import AppRouter from './AppRouter'
ReactDOM.render(AppRouter,document.querySelector("#app"));