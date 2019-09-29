import React from 'react'
import RMeScroll from '../../RMescroll';
import IArticleInfo from '../../../../model/IArticleInfo';
import ArticleCard from '../../ArticleCard';
import {instance} from '../../../../common/article-fetcher';
import ArticleList from '../../ArticleList';
import ArticleApi from '../../../../common/article-api';
import IArticle from '../../../../model/Article';
export interface DefaultCategoryViewProps{
    categoryCode:string;
}
export interface DefaultCategoryViewState{
    articles:Array<IArticle>;
}
export default class DefaultCategoryView extends React.Component<DefaultCategoryViewProps,DefaultCategoryViewState>{
    private get rMeScroll(){
       return this.refs["mescroll"] as RMeScroll;
    }
    componentWillMount(){
        this.setState({
            articles:null,
        });
    }
    componentDidMount(){
        this.rMeScroll.triggerDownScroll();
    }
    down(){
        ArticleApi.fetchArticleIndex((err,result)=>{
            this.setState({
                articles:result.slice(0,9)
            });
            this.rMeScroll.endSuccess(result.length,result.length > 10);
        },this.props.categoryCode,0,11);
    }
    up(){
        ArticleApi.fetchArticleIndex((err,result)=>{
            this.setState({
                articles:this.state.articles.concat(result.slice(0,9))
            });
            this.rMeScroll.endSuccess(result.length,result.length > 10);
        },this.props.categoryCode,this.state.articles.length,11);
    }
    render(){
        return <RMeScroll ref="mescroll" downCallback={()=>{this.down()}} upCallback={()=>{this.up()}}>
            <div className="container" style={{marginTop:"20px"}}>
                <ArticleList articles={this.state.articles}/>
            </div>
        </RMeScroll>
    }
}