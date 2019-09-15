import React from 'react'
import MeScroller from '../me-scroller'
export default function factory(code:string){
    switch(code){
        case "default":
            return <MeScroller><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1><h1>{code}</h1>v</MeScroller>
        default:
            return <MeScroller><div>{code}</div></MeScroller>
    }
}