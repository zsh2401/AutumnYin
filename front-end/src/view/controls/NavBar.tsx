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
        this.setState({
            selectedKey:eventKey
        });
    }
    render(){
        return <Navbar>
        <Navbar.Header style={{marginRight:"20px"}}>
          <a onClick={()=>this.onSelect("/")} style={{lineHeight:"56px",marginLeft:"20px"}}>AUXYIN-秋隐</a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav onSelect={this.onSelect} activeKey={this.state.selectedKey}>
            <Nav.Item eventKey="/discover">发现</Nav.Item>
            <Nav.Item eventKey="/about">关于</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    }
    renderX(){
        return (<nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="/">AuYin.com 秋隐</a> 
            <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target=".targetMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse targetMenu">
                <ul className="navbar-nav">
                    <a className="nav-link" href="#">
                            首页
                    </a>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            开源/捐赠
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/donate">捐赠与支持</a>
                            <a className="dropdown-item" href="/opensource">开源与鸣谢</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            帮助
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/help">说明书</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            关于
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/about">联系</a>
                            <a className="dropdown-item" href="/story">故事</a>
                            <a className="dropdown-item" href="https://zsh2401.top">博客</a>
                            <a className="dropdown-item" href="/com">商务合作</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </nav>)
    }
}