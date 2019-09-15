import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "./index.css"
import cm,{getCodesOnly} from '../../../../common/categroies-manager'
export interface ICategroies{
    [code:string]:string;
}
export interface ICategroiesTabProps{
    selectionChanged?:CategroiesTabSelectionChangedEventHandler;
    selected:string;
}
export interface CategroiesTabSelectionChangedEventHandler{
    (categroyCode:string):void;
}
export default class CategroiesTab extends React.Component<ICategroiesTabProps>{
    onSelect(key:string){
        this.props.selectionChanged(key);
    }
    render(){
        return <ScrollMenu
        itemClass="cb-menu-item"
        itemClassActive="cb-menu-item-active"
        onSelect={(key:string)=>this.onSelect(key)}
        selected={this.props.selected}
        data={this.getCategroiesData()}
      />
    }
    getCategroiesData():any{
        let buffer = [];
        let categroies = cm();
        getCodesOnly().forEach(e=>
             buffer.push(<div key={e}>{categroies[e]}</div>)
        );
        return buffer;
    }
}