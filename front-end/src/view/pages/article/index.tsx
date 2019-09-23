import React from 'react'
import marked from 'marked'
import StdLayout from '../../layout/StdLayout';
import MarkdownView from '../../controls/MarkdownView';
import {instance} from '../../../common/article-fetcher'
import "./index.css"
import IArticleInfo from '../../../model/IArticleInfo';
import LoadingView from './LoadingView';
import { ContentView } from './ContentView';
export interface ArticleViewState{
    content:string;
    ainfo:IArticleInfo;
    status:"loading" | "ok" | "error";
    id:string;
}
export default class ArticleView extends React.Component<any,ArticleViewState>{
    componentWillMount(){
        this.setState({
            content:null,
            ainfo:null,
            status:"loading",
            id:this.props.match.params.id
        });
    }
    componentDidMount(){
        instance().fetchArticleInfoById(this.state.id).then(data=>{
            this.setState({
                ainfo:data
            });
            if(this.state.content){
                this.setState({
                    status:"ok"
                });
            }
        }).catch(err=>{
            console.error("wtf" + err);
        });
        instance().fetchArticleContentById(this.state.id).then((text)=>{
            this.setState({
                content:text
            });
            if(this.state.ainfo){
                this.setState({
                    status:"ok"
                });
            }
        }).catch(err=>{
            console.error("wtf" + err);
        });
    }
    render(){
        let content = null;
        switch(this.state.status){
            case "loading":
                content = <LoadingView/>
                break;
            case "ok":
                content = <ContentView info={this.state.ainfo} markdownContent={this.state.content}></ContentView>
                break;
            default:
                content = <div>Error</div>
                break;
        }
        return <StdLayout>
            <div className="container">
                {content}
            </div>
        </StdLayout>
    }
}