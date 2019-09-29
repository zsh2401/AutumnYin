import React from "react"
import StdLayout from "../../layout/StdLayout";
import { Divider, Avatar, Icon } from "rsuite";
import "./index.css"
export default class About extends React.Component{
    render(){
        return <StdLayout>
            <div className="container">
                <br/>
                <img className="d-block img-fluid" style={{marginLeft:"auto",marginRight:"auto"}} src={require("../../../assets/copy-to-root/favicon.png")}/>
                <div className="text-center">
                    <h3>秋隐</h3>
                    <h6>WWW.<span style={{color:"#F57C00"}}>A</span>UX<span style={{color:"#FF4081"}}>Y</span>IN.COM</h6>
                </div>
                <Divider/>
                <DeveloperCard iconSrc="https://s2.ax1x.com/2019/09/29/u8RuZV.th.jpg" name="zsh2401" do="主要程序开发"/>
            </div>
        </StdLayout>
    }
}
interface DeveloperCardProps{
    name:string;
    do:string;
    iconSrc:string;
}
class DeveloperCard extends React.Component<DeveloperCardProps>{
    render(){
        return <div>
            <Avatar circle src={this.props.iconSrc}></Avatar>
            <div className="d-inline">
                <span className="d-inline">{this.props.name}</span>
                <p className="d-inline">www</p>
            </div>
        </div>
    }
}