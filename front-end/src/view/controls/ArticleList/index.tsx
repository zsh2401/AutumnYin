import React from 'react'
import ArticleCard from '../ArticleCard';
import IArticle from '../../../model/Article';
export interface ArticleListProps{
    articles:IArticle[];
}
export default class ArticleList extends React.Component<ArticleListProps>{
    render(){
        if(this.props.articles.length > 0){
            return this.renderContent();
        }else{
            return this.renderEmpty();
        }
    }
    private renderEmpty(){
        return <div className="text-center">
            <br/>
            <h3 >空空 如野</h3>
            <p><i>I know,I know I've let you down</i></p>
        </div>
    }
    private renderContent(){
        return <div style={{maxWidth:"800px",marginLeft:"auto",marginRight:"auto"}}>
            {this.props.articles.map(article=><ArticleCard key={article.id} article={article}/>)}
        </div>
    }
}