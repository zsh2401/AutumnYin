import React from 'react'
import IArticleInfo from '../../../model/IArticleInfo';
import Paragraph from 'rsuite/lib/Placeholder/PlaceholderParagraph';
import ArticleCard from '../ArticleCard';
import IArticle from '../../../model/Article';
export interface ArticleListProps{
    articles?:IArticle[];
}
export default class ArticleList extends React.Component<ArticleListProps>{
    render(){
        if(this.props.articles && this.props.articles.length > 0){
            return this.renderContent();
        }else{
            return this.renderSkeleton();
        }
    }
    private renderSkeleton(){
        return <div>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
            <Paragraph/>
        </div>
    }
    private renderContent(){
        return <div style={{maxWidth:"800px",marginLeft:"auto",marginRight:"auto"}}>
            {this.props.articles.map(article=><ArticleCard key={article.id} article={article}/>)}
        </div>
    }
}