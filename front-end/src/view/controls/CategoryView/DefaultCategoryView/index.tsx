import React from 'react'
import RMeScroll from '../../RMescroll';
import ArticleList from '../../ArticleList';
import ArticleApi from '../../../../common/back-api/article';
import IArticle from '../../../../model/IArticle';
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
                this.rMeScroll.endError();
                return;
            }
            setTimeout(()=>
                {this.setState({
                    articles:result.slice(0,9),
                    status:"ok"
                });
                this.rMeScroll.endSuccess(result.length,result.length > 10);
            },500);
          
        },this.props.categoryCode,0,11);
    }
    up(){
        if(this.state.status == "error"){
            this.rMeScroll.endError();
            return;
        }
        ArticleApi.fetchArticleIndex((err,result)=>{
            if(err != null){
                this.rMeScroll.endError();
                return;
            };
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
        return <div>
            <ArticleList articles={this.state.articles}/>
            {/* <p className="text-center" style={{color:"gray"}}>-- End --</p> */}
        </div> 
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
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
        </div>
    }
}