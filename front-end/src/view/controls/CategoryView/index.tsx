import React from "react"
import DefaultCategoryView from "./DefaultCategoryView";
import SentenceView from "./SentenceView";
import HomeCategoryView from "./HomeCategoryView";
export default function factory(categoryCode:string){
    switch(categoryCode){
        case "all":
            return <HomeCategoryView/>
        case "sentence":
            return <SentenceView/>
        default:
            return <DefaultCategoryView categoryCode={categoryCode}/>
    }
}