import React from "react"
import DefaultCategoryView from "./DefaultCategoryView";
import SentenceView from "./SentenceView";
export default function factory(categoryCode:string){
    switch(categoryCode){
        case "sentence":
            return <SentenceView/>
        default:
            return <DefaultCategoryView categoryCode={categoryCode}/>
    }
}