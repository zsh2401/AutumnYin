import React,{ ReactNode } from "react";
import { CHomeView } from "./CHomeView";
export class ViewProvider{
    readonly cache = {}
    get(categroyCode:string):ReactNode{
        console.log(this.cache);
        if(!this.cache[categroyCode]){
            this.cache[categroyCode] = this.createNew(categroyCode);
        }
        return this.cache[categroyCode];
    }
    createNew(code:string){
        switch(code){
            case "default":
                return <CHomeView/>
            default:
                return <div>{code}</div>
        }
    }
}