import React, { CSSProperties } from 'react'
import "./StdLayout.css"
import { NavBar } from '../controls/NavBar';
import Footer from '../controls/Footer'
export interface StdLayoutProps{
    headerTitle?:string;
    bottomIndex?:-1 | 0 | 1 | 2 | 3;
}
export default class StdLayout extends React.Component<StdLayoutProps>{
    render(){
        return <div>
            <NavBar></NavBar>
            <div style={pageBoxStyle}>
                <div style={childrenContainerStyle}>
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}
const pageBoxStyle:CSSProperties = {
    display:"flex",
    flexDirection:"column",
    height:"100%",
    width:"100%"
}
const childrenContainerStyle:CSSProperties = {
    paddingTop: "70px",
    flex:"1 0 auto"
}
const footerContainerStyle:CSSProperties = {
    flex:"0 0 auto"
}