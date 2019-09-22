import React from 'react'
import NormalCategoryView from './NormalCategoryView'
import HomeView from './HomeView';
export default function factory(categroyCode:string){
    switch(categroyCode){
        case "default":
            return <HomeView/>
        default:
            return <HomeView/>
    }
}