import React from 'react';
import {Navbar, Nav, Dropdown, Icon} from 'rsuite'
import { Link } from 'react-router-dom';
import hs from '../../common/history-provider'
export interface NavBarState{
    selectedKey:string;
}
export class NavBar extends React.Component<any,NavBarState>
{
    componentWillMount(){
        this.setState({
            selectedKey:"/"
        });
    }
    onSelect(eventKey:string){
        hs().push(eventKey);
        // this.setState({
        //     selectedKey:eventKey
        // });
    }
    render(){
        let that = this;
        return <Navbar style={{background:"white",border:"1px black"}}>
        <Navbar.Header style={{marginRight:"20px"}}>
          <a onClick={()=>that.onSelect("/")} style={{lineHeight:"56px",marginLeft:"20px"}}>AUXYIN-秋隐</a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav onSelect={that.onSelect} activeKey={this.state.selectedKey}>
            <Nav.Item eventKey="/discover">发现</Nav.Item>
            <Nav.Item eventKey="/about">关于</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    }
}