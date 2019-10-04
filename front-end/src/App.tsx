import ReactDOM from 'react-dom'

import "./App.css"

import OfflinePluginRuntime from "offline-plugin/runtime"

import debugmx from "./common/debug-mx"

if(!debugmx.isDev){
    console.log("wtf");
    console.log("is production env,install the ServiceWorker")
    OfflinePluginRuntime.install();
    OfflinePluginRuntime.update();
    OfflinePluginRuntime.applyUpdate();
}
//@ts-ignore


import AppRouter from './AppRouter'
ReactDOM.render(AppRouter,document.querySelector("#app"));
