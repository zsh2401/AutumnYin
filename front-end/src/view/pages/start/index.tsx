import React from 'react'
import "./index.css"
import { Button, Divider, ButtonGroup } from 'rsuite'
import hs from '../../../common/history-provider'
import DebugMx from '../../../common/debug-mx'
export default class StartPage extends React.Component{
    private start(){
        DebugMx.isFirstTimeLaunchApp = false;
        hs().push("/")
    }
    private view(){
        window.open("https://github.com/zsh2401/AutumnYin");
    }
    private chkToVideo(){
        console.log("video loaded");
        (this.refs.bg_img as HTMLImageElement).style.visibility = "hidden";
        (this.refs.bg_video as HTMLVideoElement).style.visibility = "visible";
    }
    render(){
        let that =this;
        return <div>
            <img ref="bg_img" className="start-bg-img" src={require("../../../assets/video_cover.jpeg")}/>

            <video ref="bg_video" onCanPlay={()=>that.chkToVideo()} className="start-bg-video" style={{visibility:"hidden"}} muted autoPlay loop>
                <source className="start-bg-source" src="https://dream.zsh2401.top:8059/night.mp4" type='video/mp4'></source>
            </video>

            <div className="h-100 w-100 d-flex flex-column">
                <div className="flex-grow-1 h-100 w-100 d-flex flex-column justify-content-center">
                    <div className="w-100 d-flex justify-content-center">
                        <div className="text-white">
                            <h1>Welcome to here!</h1>
                            <h1>秋隐 AUXYIN</h1>
                            <h5>开源的快速阅览应用</h5>
                            <Divider/>
                            <div className="w-100 d-flex justify-content-center">
                                <ButtonGroup>
                                    <Button onClick={()=>that.start()} appearance="primary">开始使用</Button>
                                    <Button onClick={()=>that.view()} appearance="default">浏览源代码</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-grow-0">
                    <p className="text-center text-white">
                        v{DebugMx.version}
                    </p>
                    <br/>
                </div>
            </div>
            
        </div>
    }
}