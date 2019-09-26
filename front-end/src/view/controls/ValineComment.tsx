import React from 'react'
import idg from '../../common/id-generator'
import "leancloud-storage"
import Valine from 'valine'
const APP_ID = "gLFeD2ydyxP4PY4D8oaMQRai-gzGzoHsz";
const APP_KEY = "66XqMWAGiQxt4MuHuUSIXon4";
const PLACE_HOLDER = "说点什么吧!";
export interface ValineCommentProps{
    path?:string;
}
export default class ValineComment extends React.Component<ValineCommentProps>{
    private mainEle:HTMLDivElement = null;
    private id:string = idg();
    componentDidMount(){
        console.log(this.mainEle);
        new Valine({
            el:"#" + this.id,
            appId:APP_ID,
            appKey:APP_KEY,
            path:this.props.path || null,
            placeholder:PLACE_HOLDER,
            visitor:true
        });
    }
    render(){
        let that = this;
        return <div id={this.id}></div>
    }
}