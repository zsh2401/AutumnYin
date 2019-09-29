import React from 'react'
import RMeScroll from '../../RMescroll';
import ArticleList from '../../ArticleList';
import ArticleApi from '../../../../common/article-api';
import IArticle from '../../../../model/Article';
import Paragraph from 'rsuite/lib/Placeholder/PlaceholderParagraph';
export interface DefaultCategoryViewProps{
    categoryCode:string;
}
export interface DefaultCategoryViewState{
    articles:Array<IArticle>;
    status:"loading" | "ok" | "error";
}
export default class DefaultCategoryView extends React.Component<DefaultCategoryViewProps,DefaultCategoryViewState>{
    private get rMeScroll(){
       return this.refs["mescroll"] as RMeScroll;
    }
    componentWillMount(){
        this.setState({
            articles:null,
            status:"loading"
        });
    }
    componentDidMount(){
        this.rMeScroll.triggerDownScroll();
    }
    down(){
        ArticleApi.fetchArticleIndex((err,result)=>{
            if(err!=null){
                this.setState({
                    status:"error"
                });
                return;
            }
            this.setState({
                articles:result.slice(0,9),
                status:"ok"
            });
            this.rMeScroll.endSuccess(result.length,result.length > 10);
        },this.props.categoryCode,0,11);
    }
    up(){
        ArticleApi.fetchArticleIndex((err,result)=>{
            if(err != null)return;
            this.setState({
                articles:this.state.articles.concat(result.slice(0,9))
            });
            this.rMeScroll.endSuccess(result.length,result.length > 10);
        },this.props.categoryCode,this.state.articles.length,11);
    }
    render(){
        let view = null;
        switch (this.state.status) {
            case "loading":
                view = this.renderLoading();
                break;
            case "ok":
                view = this.renderList();
                break;
            default:
                view = this.renderError();
                break;
        }
        return <RMeScroll ref="mescroll" downCallback={()=>{this.down()}} upCallback={()=>{this.up()}}>
            <div className="container" style={{marginTop:"20px"}}>
                {view}
            </div>
        </RMeScroll>
    }
    renderList(){
        return <ArticleList articles={this.state.articles}/>
    }
    renderError(){
        return <div className="text-center">
        <br/>
        <h3 >发生异常</h3>
        <p>请检查网络</p>
        <p><i>How does it feel got no one on your side?</i></p>
    </div>
    }
    renderLoading(){
        return <div>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
        </div>
    }
}