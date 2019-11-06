import ReactDOM from 'react-dom'


import "jquery"

import "bootstrap"
import "./view/css/bs-simplex/_entry.scss"

import "rsuite/dist/styles/rsuite-default.min.css"

import "./lib/mescroll/index.css"

import "./App.css"



import OfflinePluginRuntime from "offline-plugin/runtime"

import debugmx from "./common/debug-mx"

if(!debugmx.isDev){
    console.log("install ServiceWorker")
    OfflinePluginRuntime.install();
}
//@ts-ignore

import AppRouter from './AppRouter'
ReactDOM.render(AppRouter,document.querySelector("#app"));


