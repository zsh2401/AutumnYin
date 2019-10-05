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

import React from 'react';
import AppRouter from './AppRouter'
import DebugMx from './common/debug-mx';
import StartPage from './view/pages/start';
ReactDOM.render(AppRouter,document.querySelector("#app"));


