import React from 'react'
import RMeScroll from '../../RMescroll';
import IArticleInfo from '../../../../model/IArticleInfo';
import ArticleCard from '../../ArticleCard';
import {instance} from '../../../../common/article-fetcher';
import ArticleList from '../../ArticleList';
export interface DefaultCategoryViewProps{
    categoryCode:string;
}
export interface DefaultCategoryViewState{
    articles:Array<IArticleInfo>;
    state:"loading" | "ok" | "error";
}
export default class DefaultCategoryView extends React.Component<DefaultCategoryViewProps,DefaultCategoryViewState>{
    private get rMeScroll(){
       return this.refs["mescroll"] as RMeScroll;
    }
    componentWillMount(){
        this.setState({
            articles:null,
            state:"loading"
        });
    }
    componentDidMount(){
        this.rMeScroll.triggerDownScroll();
    }
    down(){
        instance().fetchArticleIndex(0,11,this.props.categoryCode)
        .then((data:IArticleInfo[])=>{
            this.setState({articles:data.slice(0,9)});
            this.setState({state:"ok"});
            this.rMeScroll.endSuccess(data.length - 1,data.length > 10)
        })
        .catch(err=>{console.error(err);this.setState({state:"error"})})
    }
    up(){
        instance().fetchArticleIndex(this.state.articles.length,11,this.props.categoryCode)
        .then((data:IArticleInfo[])=>{
            this.setState({articles:this.state.articles.concat(data)});
            this.setState({state:"ok"})
            this.rMeScroll.endSuccess(data.length - 1,data.length > 10)
        })
        .catch(err=>{console.error(err);this.setState({state:"error"})})
    }
    render(){
        return <RMeScroll ref="mescroll" downCallback={()=>{this.down()}} upCallback={()=>{this.up()}}>
            <div className="container" style={{marginTop:"20px"}}>
                <ArticleList articles={this.state.articles}/>
            </div>
        </RMeScroll>
    }
}