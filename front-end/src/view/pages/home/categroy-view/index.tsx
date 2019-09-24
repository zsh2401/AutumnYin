import React from 'react'
import HomeView from './HomeView';
export default function factory(categroyCode:string):React.ReactNode{
    switch(categroyCode){
        case "default":
            return <HomeView/>
        default:
            return <HomeView/>
    }
}