import ReactDOM from 'react-dom'



import "rsuite/dist/styles/rsuite-default.min.css"
import "./view/css/bs-simplex/_entry.scss"
import "./lib/mescroll/index.css"
import "./App.css"

import "jquery"
import "bootstrap"

import OfflinePluginRuntime from "offline-plugin/runtime"

import debugmx from "./common/debug-mx"

if(!debugmx.isDev){
    console.log("install ServiceWorker")
    OfflinePluginRuntime.install();
}
//@ts-ignore

import AppRouter from './AppRouter'
ReactDOM.render(AppRouter,document.querySelector("#app"));


