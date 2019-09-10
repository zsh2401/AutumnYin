import React, { CSSProperties } from 'react'
import "./StdLayout.css"
export interface StdLayoutProps{
    topBarTitle?:string;
}
export default class StdLayout extends React.Component<StdLayoutProps>{
    render(){
        return <div style={boxStyle}>
            <div style={topStyle}>{this.props.topBarTitle}</div>
            <div style={centerStyle}>
                <div className="container">
                {this.props.children}
                </div>
           </div>
            <div className="bottomBarContainer" style={bottomStyle}>BOTTOM BAR</div>
        </div>
    }
}
const boxStyle:CSSProperties = {
    height:'100%',
    display: 'flex',
    flexDirection: "column"
}
const topStyle:CSSProperties = {
    flex: "0 0 auto",
}
const centerStyle:CSSProperties = {
    flex: "1 0 auto",
    overflowY:"auto",
    height:"70%",
    position:"relative"
}
const bottomStyle:CSSProperties = {
    flex: "0 0 auto",
}