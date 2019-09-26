import React from 'react'
import StdLayout from '../../layout/StdLayout';
import {instance} from '../../../common/article-fetcher'
import "./index.css"
import IArticleInfo from '../../../model/IArticleInfo';
import ValineComment from '../../controls/ValineComment';
import ArticleView from './ArticleView';
import { Divider } from 'rsuite';
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
            setTimeout(()=>{
                this.setState({
                    content:text
                });
            },1000)
        }).catch(err=>{
            console.error(err);
        });
    }
    render(){
        let id = this.props.match.params.id;
        return <StdLayout>
            <ArticleView content={this.state.content} info={this.state.ainfo}/>
            <Divider/>
            <div className="container">
                <ValineComment path={"/p/" + id}/>
            </div>
        </StdLayout> 
    }
}