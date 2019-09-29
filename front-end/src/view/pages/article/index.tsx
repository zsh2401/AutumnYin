import React from 'react'
import StdLayout from '../../layout/StdLayout';
import "./index.css"
import ValineComment from '../../controls/ValineComment';
import ArticleView from '../../controls/ArticleView/ArticleView';
import { Divider } from 'rsuite';
import aapi from '../../../common/article-api'
import IArticle from '../../../model/Article';
export interface ArticlePageState{
    article:IArticle;
}
export default class ArticlePage extends React.Component<any,ArticlePageState>{
    componentWillMount(){
        this.setState({
            article:null,
        });
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        aapi.fetchArticle(id,(err,article)=>{
            setTimeout(()=>{
                this.setState({
                    article:article
                });
                
            },1000)
        })
    }
    render(){
        let id = this.props.match.params.id;
        return <StdLayout>
            <div className="container">
                <ArticleView info={this.state.article}/>
                <Divider/>
                <ValineComment path={"p-" + id}/>
            </div>
        </StdLayout> 
    }
}