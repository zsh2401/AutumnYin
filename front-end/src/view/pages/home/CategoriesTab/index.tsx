import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "./index.css"
export interface ICategroies{
    [code:string]:string;
}
export interface ICategroiesTabProps{
    selectionChanged?:CategroiesTabSelectionChangedEventHandler;
    categroies:ICategroies
}
export interface CategroiesTabSelectionChangedEventHandler{
    (categroyCode:string):void;
}
export default class CategroiesTab extends React.Component<ICategroiesTabProps>{
    state = {
        active:"default"
    }
    onSelect(key:string){
        this.props.selectionChanged(key);
        this.setState({
            active:key
        });
    }
    render(){
        return <ScrollMenu
        itemClass="cb-menu-item"
        itemClassActive="cb-menu-item-active"
        onSelect={(key:string)=>this.onSelect(key)}
        selected={this.state.active}
        data={this.getCategroiesData()}
      />
    }
    getCategroiesData():any{
        let buffer = [];
        for(let key in this.props.categroies){
             buffer.push(<div key={key}>{this.props.categroies[key]}</div>)
        }
        return buffer;
    }
}