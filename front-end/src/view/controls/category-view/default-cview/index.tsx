import React from 'react'
import RMeScroll from '../../react-mescroll';
import IArticleInfo from '../../../../model/IArticleInfo';
import ArticleCard from '../../ArticleCard';
import ArticleFetcher,{instance} from '../../../../common/article-fetcher';
import Notifications, {notify} from 'react-notify-toast';
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
            articles:[],
            state:"loading"
        });
    }
    componentDidMount(){
        this.rMeScroll.triggerDownScroll();
    }
    down(){
        instance().fetchArticleIndex(0,10,this.props.categoryCode)
        .then((data:IArticleInfo[])=>{this.setState({articles:data});this.setState({state:"ok"})})
        .catch(err=>{console.error(err);this.setState({state:"error"})})
        .finally(()=>this.rMeScroll.endSuccess());
    }
    render(){
        let view = null;
        switch(this.state.state){
            case "loading":
                view=  <div>Loading</div>
                break;
            case "error":
                view=  <div>Error</div>
                break;
            default:
                view = this.state.articles.map((article)=>{
                    return <ArticleCard key={article.id} info={article}/>
                })
                if(this.state.articles.length == 0){
                    view = "空空如也"
                }
                break;
        }

        return <RMeScroll ref="mescroll" downCallback={()=>{this.down()}}>
            <div className="container">{view}</div>
        </RMeScroll>
    }
}