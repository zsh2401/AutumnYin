import React from 'react'
export interface ICategroyViewProps{
    code:string;
}
export default class CategroyView extends React.Component<ICategroyViewProps>{
    render(){
        return this.props.code;
    }
}