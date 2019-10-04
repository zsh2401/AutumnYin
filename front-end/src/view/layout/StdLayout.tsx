import React, { CSSProperties } from 'react'
import "./StdLayout.css"
import { NavBar } from '../controls/NavBar';
import { Footer } from 'rsuite';
export interface StdLayoutProps{
    headerTitle?:string;
    bottomIndex?:-1 | 0 | 1 | 2 | 3;
}
export default class StdLayout extends React.Component<StdLayoutProps>{
    render(){
        return <div className="d-flex flex-column h-100">
                <div className="flex-grow-0">
                    <NavBar></NavBar>
                </div>
                <div className="flex-grow-1 h-100">
                    {this.props.children}
                </div>
            </div>
    }
}