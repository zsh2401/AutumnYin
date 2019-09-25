import React from 'react'
import StdLayout from '../../layout/StdLayout';
import {instance} from '../../../common/article-fetcher'
import "./index.css"
import IArticleInfo from '../../../model/IArticleInfo';
import ValineComment from '../../controls/ValineComment';
import ArticleView from './ArticleView';
export interface ArticlePageState{
    content:string;
    ainfo:IArticleInfo;
}
export default class ArticlePage extends React.Component<any,ArticlePageState>{
    componentWillMount(){
        this.setState({
            content:null,
            ainfo:null,
        });
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        instance().fetchArticleInfoById(id).then(data=>{
            this.setState({
                ainfo:data
            });
        }).catch(err=>{
            console.error(err);
        });
        instance().fetchArticleContentById(id).then((text)=>{
            this.setState({
                content:text
            });
        }).catch(err=>{
            console.error(err);
        });
    }
    render(){
        return <StdLayout>
            <ArticleView content={this.state.content} info={this.state.ainfo}/>
            <div className="container">
                <ValineComment/>
            </div>
        </StdLayout> 
    }
}