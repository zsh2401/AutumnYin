import React from "react"
import {Card} from 'react-bootstrap'
import "./index.css"
import hp from '../../../common/history-provider'
import Placeholder from 'rsuite/lib/Placeholder';
import { Panel, Divider } from "rsuite";
import hs from '../../../common/history-provider'
import IArticle from "../../../model/IArticle";
export interface ArticleCardProps{
    article?:IArticle;
}
export default class ArticleCard extends React.Component<ArticleCardProps>{
    onClick(){
        hs().push("/p/" + this.props.article.id);
    }
    private GetSetTopMark(){
        if(this.props.article.set_top){
            return "<置顶>";
        }
        return null;
    }
    render(){
        return <div onClick={()=>this.onClick()}>
            <div className="d-flex flex-row" style={{height:"84.375px"}}>
                <div className="flex-first">
                    <img style={{width:"150px",height:"84.375px",borderRadius:"5px"}}  src={this.props.article.img}/>
                </div>
                <div className="flex-end d-flex flex-column" style={{paddingLeft:"10px"}}>
                    <h6 className="flex-grow-1 flex-sm-grow-0">{this.GetSetTopMark()}{this.props.article.title}</h6>
                    <div className="flex-grow-1 d-none d-sm-block">
                        <p style={{maxHeight:"42.38px"}}>{this.props.article.summary}</p>
                    </div>
                    <p className="flex-grow-0">编辑: {this.props.article.author}</p>
                    <div className="flex-grow-0">
                        <span>{this.props.article.crt_time}</span>
                    </div>
                </div>
            </div>
            <Divider/>
        </div>
    }
}