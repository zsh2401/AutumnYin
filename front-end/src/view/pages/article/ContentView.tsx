import React from 'react'
import marked from 'marked'
import IArticleInfo from '../../../model/IArticleInfo';
import "./ContentView.css"
import ValineComment from '../../controls/ValineComment';
export interface ContentViewProps{
    markdownContent:string;
    info:IArticleInfo;
}
export class ContentView extends React.Component<ContentViewProps>{
    render(){
        return <div className="content-view-box">
            <h1 className="text-center">{this.props.info.title}</h1>
            <p className="text-center">发布时间:{this.props.info.crt_time}作者:{this.props.info.author}</p>
            <article className="content-view-box-article" dangerouslySetInnerHTML={{__html:marked(this.props.markdownContent)}}></article>
            <ValineComment/>
        </div>
    }
}