import React, { CSSProperties } from 'react'
import "./StdLayout.css"
import { NavBar } from '../controls/NavBar';
export interface StdLayoutProps{
    headerTitle?:string;
    bottomIndex?:-1 | 0 | 1 | 2 | 3;
}
export default class StdLayout extends React.Component<StdLayoutProps>{
    render(){
        return <div className="d-flex flex-column h-100">
                <div className="flex-first">
                    <NavBar></NavBar>
                </div>
                <div className="flex-end h-100" style={{overflowY:"auto"}}>
                    {this.props.children}
                </div>
            </div>
    }
}