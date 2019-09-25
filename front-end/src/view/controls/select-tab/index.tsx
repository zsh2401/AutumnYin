import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "./index.css"
export interface ISelectTabProps{
    selectionChanged?:(index:number)=>void;
    selectIndex:number;
    items:Array<string>;
}
export default class SelectTab extends React.Component<ISelectTabProps>{
    onSelect(key:string){
        this.props.selectionChanged(parseInt(key));
    }
    render(){
        return <ScrollMenu
        itemClass="cb-menu-item"
        itemClassActive="cb-menu-item-active"
        onSelect={(key:string)=>this.onSelect(key)}
        selected={this.props.selectIndex + ""}
        data={this.renderElements()}/>
    }
    renderElements(){
        let index = 0;
        return this.props.items.map(item=>{
            return <div key={index++ + ""}>{item}</div>
        })
    }
}