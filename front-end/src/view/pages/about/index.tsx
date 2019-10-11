import React from "react"
import StdLayout from "../../layout/StdLayout";
import { Divider, Avatar, Icon } from "rsuite";
import debugmx from '../../../common/debug-mx'
import "./index.css"
import { developerData, osBProjects,osFProjects, editors } from "./data";
export default class About extends React.Component{
    render(){
        return <StdLayout>
            <div className="h-100 position-relative overflow-auto">
            <div className="d-flex flex-column container bg-normal">
                <div className="flex-grow-1">
                    <br/>
                    <img className="d-block img-fluid" style={{marginLeft:"auto",marginRight:"auto"}} src={require("../../../assets/copy-to-root/favicon.png")}/>
                    <div className="text-center">
                        <h3>秋隐</h3>
                        <h6>WWW.<span style={{color:"#F57C00"}}>A</span>UX<span style={{color:"#FF4081"}}>Y</span>IN.COM</h6>
                        <p>v{debugmx.version}<br/>编译时间-{debugmx.compiledTime}</p>
                    </div>
                    {/* <Divider/> */}
                    <div className="row">
                        <div className="col-sm-6">
                            <Divider>主要开发人员</Divider>
                            <div className="row">
                                {developerData.map(d=> <DeveloperCard key={d.name} name={d.name} desc={d.desc} iconSrc={d.iconSrc}/>)}
                            </div>
                            <Divider>内容提供</Divider>
                            <div className="row">
                                {editors.map(d=> <DeveloperCard key={d.name} name={d.name} desc={d.desc} iconSrc={d.iconSrc}/>)}

                            </div>
                        </div>

                        <div className="col-sm-6">
                            <Divider>使用的前端开源技术</Divider>
                            <div className="row">
                                {osFProjects.map(d=><OpenSrouceProjectCard key={d.name} name={d.name} url={d.url} use={d.use} description={d.description} iconSrc={d.iconSrc}/>)}
                            </div>
                            <Divider>使用的后端开源技术</Divider>
                            <div className="row">
                                {osBProjects.map(d=><OpenSrouceProjectCard key={d.name} name={d.name} url={d.url} use={d.use} description={d.description} iconSrc={d.iconSrc}/>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-grow-0 text-center" style={{paddingTop:"10px",paddingBottom:"10px"}}>
                    <p>Copyright © 2019 zsh2401 and other members,All Rights Reserved</p>
                    <i>Love Yin For Good</i>
                </div>
            </div>
            </div>
        </StdLayout>
    }
}
export interface DeveloperCardProps{
    name:string;
    desc:string;
    iconSrc:string;
}
class DeveloperCard extends React.Component<DeveloperCardProps>{
    render(){
        return <div style={{marginTop:"15px"}} className="col-12 col-sm-6 d-flex flex-row">
            <Avatar className="flex-grow-0" circle src={this.props.iconSrc}/>
            <div className="flex-grow-1 d-flex flex-column justify-content-center" style={{marginLeft:"15px"}}>
                <div>
                    <b>{this.props.name}</b>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        </div>
    }
}
export interface OpenSrouceProjectCardProps{
    name:string;
    url:string;
    description:string;
    iconSrc:string;
    use:string;
}
class OpenSrouceProjectCard extends React.Component<OpenSrouceProjectCardProps>{
    render(){
        return <div style={{marginTop:"15px"}} className="col-12 col-sm-6 d-flex flex-row">
        <img style={{minHeight:"40px",minWidth:"40px",height:"40px",width:"40px"}} className="flex-first" src={this.props.iconSrc}/>
        <div className="flex-end" style={{marginLeft:"15px"}}>
            <div>
                <a href={this.props.url}><b>{this.props.name}</b></a>
                <p>{this.props.description}<br/><i>{this.props.use}</i></p>
            </div>
        </div>
    </div>
    }
}