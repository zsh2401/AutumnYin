import React from 'react'
import StdLayout from '../../layout/StdLayout';
import "./index.css"
import ValineComment from '../../controls/ValineComment';
import ArticleView from '../../controls/ArticleView/ArticleView';
import { Divider } from 'rsuite';
import aapi from '../../../common/back-api/article'
import IArticle from '../../../model/IArticle';
import Paragraph from 'rsuite/lib/Placeholder/PlaceholderParagraph';
export interface ArticlePageState{
    article:IArticle;
    status:"ok" | "err" | "loading";
}
export default class ArticlePage extends React.Component<any,ArticlePageState>{
    private readonly id = this.props.match.params.id;
    componentWillMount(){
        this.setState({
            article:null,
            status:"loading"
        });
    }
    componentDidMount(){
        aapi.fetchArticle(this.id,(err,article)=>{
            if(err){
                this.setState({
                    status:"err"
                });
                return;
            }
            setTimeout(()=>{
                this.setState({
                    article:article,
                    status:"ok"
                });
                
            },1000)
        })
    }
    render(){
        let view = null;
        switch (this.state.status) {
            case "ok":
                view = this.renderOK();
                break;
            case "loading":
                view = this.renderLoading();
                break;
            default:
                view = this.renderError();
                break;
        }
        return <StdLayout>
            <div className="d-flex flex-column h-100" style={{position:"relative",overflowY:"auto"}}>
                <div className="container flex-grow-1 c-container">
                    {view}
                </div>
            </div>
        </StdLayout> 
    }
    renderError(){
        return <div className="text-center">
        <br/>
        <h3>发生异常</h3>
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
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
        </div> 
    }
    renderOK(){
        return <div>
            <ArticleView info={this.state.article}/>
            <Divider/>
            <ValineComment path={"p-" + this.id}/>
        </div>
    }
}