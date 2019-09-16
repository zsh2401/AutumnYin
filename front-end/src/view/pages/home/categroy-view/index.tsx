import React from 'react'
import MeScroller from '../me-scroller'
import NormalCategoryView from './NormalCategoryView'
export default function factory(categroyCode:string){
    switch(categroyCode){
        case "default":
            return <MeScroller>home</MeScroller>
        default:
            return <NormalCategoryView categroyCode={categroyCode}/>
    }
}