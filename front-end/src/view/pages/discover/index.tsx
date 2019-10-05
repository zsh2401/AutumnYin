import React from "react"
import StdLayout from "../../layout/StdLayout";
import idg from '../../../common/id-generator'
export default class Discover extends React.Component{
    private vid  = idg();
    componentDidMount(){
        //@ts-ignore
        var bv = new Bideo();
        bv.init({
            videoEl:this.refs.elVideo,
            container:this.refs.elContainer,
            src:[
                {src:"https://dream.zsh2401.top:8059/t.mp4", type: 'video/mp4'}
            ]

        });
    }
    render(){
        return <StdLayout>
            <div ref="elContainer" className="container">
                <video className="w-100" ref="elVideo"></video>
            </div>
            <div style={{zIndex:999}} className="container h-100 position-relative overflow-auto bg-normal">
                <h1><span style={{color:"#0288D1"}}>D</span>iscover</h1>
            </div>
        </StdLayout>
    }
}