import React from "react"
import StdLayout from "../../layout/StdLayout";
import "./index.css"
import { Divider, Button } from "rsuite";
import hs from '../../../common/history-provider'
export default class Discover extends React.Component{
    render(){
        return <StdLayout>
            <div className="d-flex flex-column container c-container h-100 position-relative overflow-auto bg-normal">
                <div className="flex-grow-1">
                    <div>
                        <h1><span style={{color:"#0288D1"}}>D</span>iscover</h1>
                        <Divider/>
                        <h4>推荐应用</h4>
                        <div className="row">
                            <Card bgType={1} title="2401贴吧自动签到" desc="每天免费签到" onClick={()=>{window.open("https://dream.zsh2401.top:2402")}}/>
                            <Card bgType={2} title="2401的晚秋咖啡" desc="Seymour Zhang's blog website" onClick={()=>{window.open("https://zsh2401.top")}}/>
                            <Card bgType={4} title="秋之盒" desc="开源,简约,免费的刷机工具箱" onClick={()=>{window.open("https://atmb.top")}}/>
                            <Card bgType={3} title="路过图床" desc="本站点主要使用的图床,简单好用" onClick={()=>{window.open("https://imgchr.com/")}}/>
                        </div>
                        <Divider/>
                        <h4>链接</h4>
                        <a href="https://zsh2401.top" target="_blank">2401的晚秋咖啡</a><br/>
                        <a href="https://imgchr.com" target="_blank">路过图床</a><br/>
                        <a href="https://github.com/zsh2401/AutumnYin" target="_blank">开放源代码</a><br/>
                        <a href="https://github.com/zsh2401/AutumnYin/blob/master/LICENSE" target="_blank">开源协议</a><br/>
                        <a href="https://code.visualstudio.com" target="_blank">Visual Studio Code</a><br/>
                        <a href="mailto://zsh2401@163.com" target="_blank">发送邮件到:zsh2401@163.com</a><br/>
                        <Divider></Divider>
                        <Button onClick={()=>{
                            localStorage.clear();
                            hs().push("/")
                            // window.location.reload();
                        }} appearance="link">重置应用设置</Button>
                    </div>
                </div>
                <div className="flex-grow-0 text-center">
                    <p>
                        <p>Copyright © 2019 zsh2401 and other members,All Rights Reserved</p>
                        <i>Love Yin For Good</i>
                    </p>
                </div>
            </div>
            
        </StdLayout>
    }
}
interface ICardProps{
    bgType:number;
    title:string;
    desc:string;
    onClick:()=>void;
}
const Card = (props:ICardProps)=><div className="col-6" style={{padding:"10px"}}>
    <div className={"discover-card discover-card-" + (props.bgType || 0)} onClick={()=>props.onClick()}>
    <h5>{props.title}</h5>
    <p>{props.desc}</p>
</div>
</div>

