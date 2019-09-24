import React from "react"
import IArticleInfo from "../../../model/IArticleInfo";
import {Card,Button} from 'react-bootstrap'
import "./index.css"
import hp from '../../../common/history-provider'
export interface ArticleCardProps{
    info:IArticleInfo;
}
export default class ArticleCard extends React.Component<ArticleCardProps>{
    render(){
        return <Card className="article-card" onClick={()=>{hp().push("/p/" + this.props.info.id)}}>
            <Card.Img src={this.props.info.img} variant="top"></Card.Img>
            <Card.Body>
                <Card.Title>{this.props.info.title}</Card.Title>
                <Card.Text>
                {this.props.info.summary}
                </Card.Text>
            </Card.Body>
        </Card>
    }
}