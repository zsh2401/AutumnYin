import React, { CSSProperties } from 'react'
import "./StdLayout.css"
export interface StdLayoutProps{
    headerTitle?:string;
    bottomIndex?:-1 | 0 | 1 | 2 | 3;
}
export default class StdLayout extends React.Component<StdLayoutProps>{
    render(){
        return <div>
            <div style={headerContainerStyle}>
                {this.props.headerTitle || "AYin.com 秋隐"}
            </div>
            <div style={childrenContainerStyle}>
                {this.props.children}
            </div>
            <div className="safe-bar" style={footerContainerStyle}>
                {this.props.bottomIndex || "unknown"}
            </div>
        </div>
    }
}
const heightOfHeader = "56px"
const heightOfFooter = "56px";
const headerContainerStyle:CSSProperties = {
    position:"fixed",
    top:"0px",
    height:"56px"
}
const childrenContainerStyle:CSSProperties = {
    paddingTop: heightOfHeader,
    paddingBottom:heightOfFooter
}
const footerContainerStyle:CSSProperties = {
    position:"fixed",
    bottom:"0px",
    height:heightOfFooter
}