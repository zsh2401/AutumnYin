import React from "react"
import IArticleInfo from "../../../model/IArticleInfo";
import {Card} from 'react-bootstrap'
import "./index.css"
import hp from '../../../common/history-provider'
import Placeholder from 'rsuite/lib/Placeholder';
export interface ArticleCardProps{
    info?:IArticleInfo;
}
export default class ArticleCard extends React.Component<ArticleCardProps>{
    render(){
        if(this.props.info){
            return <Card className="article-card" onClick={()=>{hp().push("/p/" + this.props.info.id)}}>
                <Card.Img src={this.props.info.img} variant="top"></Card.Img>
                <Card.Body>
                    <Card.Title>{this.props.info.set_top ? "[置顶]" : null}{this.props.info.title}</Card.Title>
                    <Card.Text>
                    {this.props.info.summary}
                    </Card.Text>
                </Card.Body>
            </Card>
        }else{
            return <Card className="article-card">
                <Placeholder.Paragraph style={{marginTop:10}} active/>
                <Placeholder.Paragraph style={{marginTop:10}} active/>
                <Placeholder.Paragraph style={{marginTop:10}} active/>
            </Card>
        }
    }
}