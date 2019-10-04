import React from 'react'
import CateogoryViewBase,{ICateogoryViewBaseProps,ICateogoryViewBaseState} from '../../CateogoryViewBase';
import ArticleApi from '../../../../common/back-api/article'
import IArticle from '../../../../model/IArticle';
import ArticleList from '../../ArticleList';
export interface IDefaultCategoryViewProps extends ICateogoryViewBaseProps{
    categoryCode:string;
}
export interface IDefaultCategoryViewState extends ICateogoryViewBaseState{
    articles:Array<IArticle>;
}
export default class DefaultCategoryView extends CateogoryViewBase<IDefaultCategoryViewProps,IDefaultCategoryViewState>{
    onRefresh(){
        ArticleApi.fetchArticleIndex((err,result)=>{
            if(err!=null){
                this.setState({
                    status:"error"
                });
                this.endError();
                return;
            }
            setTimeout(()=>
                {this.setState({
                    articles:result.slice(0,9),
                    status:"ok"
                });
                this.endSuccess(result.length,result.length > 10);
            },500);
          
        },this.props.categoryCode,0,11);
    }
    onFetchingNew(){
        if(this.state.status == "error"){
            this.endError();
            return;
        }
        ArticleApi.fetchArticleIndex((err,result)=>{
            if(err != null){
                this.endError();
                return;
            };
            this.setState({
                articles:this.state.articles.concat(result.slice(0,9))
            });
            this.endSuccess(result.length,result.length > 10);
        },this.props.categoryCode,this.state.articles.length,11);
    }
    renderOK(){
        return <ArticleList articles={this.state.articles}/>
    }
}