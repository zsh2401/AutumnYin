import React from 'react'
export interface ICateroiesBarProps{
    onChange?:CategroiesBarSelectionChangedEventHandler
}
export interface CategroiesBarSelectionChangedEventHandler{
    (code:string):void;
}
export default class CategroiesBar extends React.Component<ICateroiesBarProps>{
    render(){
        return <div>
            <span>wtf</span><span>wtf</span><span>wtf</span>
        </div>
    }
}