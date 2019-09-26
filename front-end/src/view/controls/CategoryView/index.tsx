import React from "react"
import DefaultCategoryView from "./DefaultCategoryView";
export default function factory(categoryCode:string){
    switch(categoryCode){
        default:
            return <DefaultCategoryView categoryCode={categoryCode}/>
    }
}