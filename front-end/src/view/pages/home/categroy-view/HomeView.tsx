import React from 'react'
import MeScroll from '../../../controls/react-mescroll'
import {instance} from '../../../../common/article-fetcher'
import IArticleInfo from '../../../../model/IArticleInfo';
import ArticleCard from '../../../controls/ArticleCard';
export interface HomeViewState{
    articles:Array<IArticleInfo>;
}
export default class HomeView extends React.Component<any,HomeViewState>{
    private mainMeScroll:MeScroll = null;
    private innerDiv:HTMLDivElement = null;
    private downHandler(){
        instance().fetchArticleIndex(0,10,"all")
        .then(articles=>{
            this.setState({
                articles:articles
            });
            this.mainMeScroll.endSuccess();
        })
        .catch(err=>{
            this.mainMeScroll.endSuccess();
        })
    }
    componentWillMount(){
        this.setState({
            articles:[],
        });
    }
    componentDidMount(){
        console.log((this.refs.inner as HTMLDivElement).clientLeft)
        this.mainMeScroll.triggerDownScroll();
    }
    render(){
        let that = this;
        return <MeScroll height={(window.outerHeight - 69 - 19) + "px"} ref={(e)=>{that.mainMeScroll = e}} downCallback={()=>that.downHandler()}>
            <div ref="inner" className="container">
            {
                this.state.articles.map(e=>{return <ArticleCard key={e.id} info={e}/>})
            }
             </div>
            <p className="text-center" style={{color:"gray"}}>我们是有底线的</p>
        </MeScroll>
    }
}