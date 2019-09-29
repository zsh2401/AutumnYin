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
    componentDidMount(){
        new Valine({
            el:"#comment",
            appId:APP_ID,
            appKey:APP_KEY,
            path:this.props.path || null,
            placeholder:PLACE_HOLDER,
            visitor:true
        });
    }
    render(){
        return <div id="comment"></div>
    }
}