import React from "react"
import IArticleInfo from "../../../model/IArticleInfo";
import {Card} from 'react-bootstrap'
import "./index.css"
import hp from '../../../common/history-provider'
import Placeholder from 'rsuite/lib/Placeholder';
import { Panel, Divider } from "rsuite";
import hs from '../../../common/history-provider'
export interface ArticleCardProps{
    info?:IArticleInfo;
}
export default class ArticleCard extends React.Component<ArticleCardProps>{
    onClick(){
        console.log("?");
        hs().push("/p/" + this.props.info.id);
    }
    private GetSetTopMark(){
        if(this.props.info.set_top){
            return "<置顶>";
        }
        return null;
    }
    render(){
        return <div onClick={()=>this.onClick()}>
            <div className="d-flex flex-row" style={{height:"84.375px"}}>
                <div className="flex-first">
                    <img style={{width:"150px",height:"84.375px",borderRadius:"5px"}}  src={this.props.info.img}/>
                </div>
                <div className="flex-end d-flex flex-column" style={{paddingLeft:"10px"}}>
                    <h6 className="flex-grow-1 flex-sm-grow-0">{this.GetSetTopMark()}{this.props.info.title}</h6>
                    <div className="flex-grow-1 d-none d-sm-block">
                        <p style={{maxHeight:"42.38px"}}>{this.props.info.summary}</p>
                    </div>
                    <p className="flex-grow-0">编辑: {this.props.info.author}</p>
                    <div className="flex-grow-0">
                        <span>{this.props.info.crt_time}</span>
                    </div>
                </div>
            </div>
            <Divider/>
        </div>
    }
}