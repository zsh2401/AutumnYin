import React from "react"
export interface ArticleCardProps{
    title:string;
    summary:string;
    imgSrc:string;
}
export default class ArticleCard extends React.Component<ArticleCardProps>{
    render(){
        return <div>
            <img src={this.props.imgSrc}/>
            {this.props.title}<br/>
            {this.props.summary}
        </div>
    }
}