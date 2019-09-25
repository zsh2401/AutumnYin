import React from "react"
import IArticleInfo from "../../../model/IArticleInfo";
import {Card,Button} from 'react-bootstrap'
import "./index.css"
import hp from '../../../common/history-provider'
import { Skeleton } from "antd";
export interface ArticleCardProps{
    info?:IArticleInfo;
}
export default class ArticleCard extends React.Component<ArticleCardProps>{
    render(){
        if(this.props.info){
            return <Card className="article-card" onClick={()=>{hp().push("/p/" + this.props.info.id)}}>
                <Card.Img src={this.props.info.img} variant="top"></Card.Img>
                <Card.Body>
                    <Card.Title>{this.props.info.title}</Card.Title>
                    <Card.Text>
                    {this.props.info.summary}
                    </Card.Text>
                </Card.Body>
            </Card>
        }else{
            return <Card className="article-card">
                <Skeleton active/>
            </Card>
        }
    }
}