import React from 'react'
import IArticleInfo from '../../../model/IArticleInfo';
// import {PageHeader, Skeleton } from 'antd';
import hs from '../../../common/history-provider'
import PlaceHolder from 'rsuite/lib/Placeholder'
import marked from 'marked'
import "./ArticleView.css"
import { Divider, Button, Icon } from 'rsuite';
export interface ArticleViewProps{
    content:string;
    info:IArticleInfo;
}
export default class ArticleView extends React.Component<ArticleViewProps>{
    render(){
        if(this.props.content && this.props.info){
            return <div className="article-box">
                <div className="container">

                    <div className="d-flex flex-grow" style={{marginTop:"20px"}}>
                        <div className="flex-first"><h3 style={{color:"gray",background:"gray",marginRight:"10px"}}>_</h3></div>
                        <div className="flex-end">
                            <h3>{this.props.info.title}</h3>
                            <small style={{marginRight:"20px"}}>
                                时间: {this.props.info.crt_time}
                            </small>
                            <small>
                                编辑: {this.props.info.author}
                            </small>
                            <br/>
                            {this.props.info.reprint ?
                                <small>来源: {this.props.info.reprint}</small> 
                                : null
                            }
                        </div>
                    </div>

                </div>
                <Divider/>
                <article className="container" dangerouslySetInnerHTML={{__html:marked(this.props.content)}}/>
            </div> 
        }else{
            return <div className="container">
                <PlaceHolder.Paragraph style={{marginTop:"10px"}} active/>
                <PlaceHolder.Paragraph style={{marginTop:"10px"}} active/>
                <PlaceHolder.Paragraph style={{marginTop:"10px"}} active/>
                <PlaceHolder.Paragraph style={{marginTop:"10px"}} active/>
                <PlaceHolder.Paragraph style={{marginTop:"10px"}} active/>
                <PlaceHolder.Paragraph style={{marginTop:"10px"}} active/>
                <PlaceHolder.Paragraph style={{marginTop:"10px"}} active/>
            </div>
        }
    }
}