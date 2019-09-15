import React from 'react'
import MeScroller from '../me-scroller'
export default function factory(code:string){
    switch(code){
        case "default":
            return <MeScroller><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1></MeScroller>
        default:
            return <MeScroller onPullDown={(e)=>setTimeout(()=>{alert("wdnmd");e.endSucess()},2000)}><div>{code}</div></MeScroller>
    }
}