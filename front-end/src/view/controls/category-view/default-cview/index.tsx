import React from 'react'
import RMeScroll from '../../react-mescroll';
import IArticleInfo from '../../../../model/IArticleInfo';
import ArticleCard from '../../ArticleCard';
import {instance} from '../../../../common/article-fetcher';
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
            articles:[null,null,null,null,null,null,null,null,null,null,null,null,null],
            state:"loading"
        });
    }
    componentDidMount(){
        this.rMeScroll.triggerDownScroll();
    }
    down(){
        instance().fetchArticleIndex(0,5,this.props.categoryCode)
        .then((data:IArticleInfo[])=>{this.setState({articles:data});this.setState({state:"ok"})})
        .catch(err=>{console.error(err);this.setState({state:"error"})})
        .finally(()=>this.rMeScroll.endSuccess());
    }
    up(){
        instance().fetchArticleIndex(this.state.articles.length,10,this.props.categoryCode)
        .then((data:IArticleInfo[])=>{
            this.setState({articles:this.state.articles.concat(data)});
            this.setState({state:"ok"})
            this.rMeScroll.endBySize(data.length);
        })
        .catch(err=>{console.error(err);this.setState({state:"error"})})
    }
    render(){
        let key:number = 0;
        return <RMeScroll ref="mescroll" downCallback={()=>{this.down()}} upCallback={()=>{this.up()}}>
            <div className="container">{this.state.articles.map((article)=>{
                    return <ArticleCard key={article ? article.id : key++} info={article}/>
                })}
            </div>
        </RMeScroll>
    }
}