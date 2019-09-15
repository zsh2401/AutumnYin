import React from 'react'
import idg from '../../../../common/id-generator'
export interface DefaultCategroyViewProps{
    categroyCode:string;
}
export default class DefaultCategroyView extends React.Component<DefaultCategroyViewProps>{
    private i:any = idg();
    render(){
        return <div style={{position:"fixed",height:"100%",overflowY:"auto"}}>{this.props.categroyCode}-{this.i}</div>
    }
}