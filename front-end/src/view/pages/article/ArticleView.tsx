import React from 'react'
import IArticleInfo from '../../../model/IArticleInfo';
import {PageHeader, Skeleton } from 'antd';
import hs from '../../../common/history-provider'
import marked from 'marked'
import "./ArticleView.css"
export interface ArticleViewProps{
    content:string;
    info:IArticleInfo;
}
export default class ArticleView extends React.Component<ArticleViewProps>{
    render(){
        if(this.props.content && this.props.info){
            return <div className="article-box">
                <PageHeader onBack={() =>hs().goBack()} title={this.props.info.title}/>
                <article className="container" dangerouslySetInnerHTML={{__html:marked(this.props.content)}}/>
            </div> 
        }else{
            return <div className="container">
                <Skeleton active/>
                <Skeleton active/>
                <Skeleton active/>
                <Skeleton active/>
                <Skeleton active/>
            </div>
        }
    }
}