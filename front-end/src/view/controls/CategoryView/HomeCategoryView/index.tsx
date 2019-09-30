import React from 'react'
import IArticle from '../../../../model/IArticle';
import ArticleList from '../../ArticleList';
import ArticleApi from '../../../../common/back-api/article'
import LodableView, { ILodableViewState } from '../../LodableView';
import Swiper from 'swiper';
export interface HomeCategoryViewState extends ILodableViewState{
    articles:Array<IArticle>;
    topSwiperArticles:Array<IArticle>;
    status:"ok" | "error" | "loading";
}
export default class HomeCategoryView extends LodableView<any,HomeCategoryViewState>{
    onInitState(state:HomeCategoryViewState){
        state.articles = [];
        state.topSwiperArticles = [];
    }
    onRefresh(){
        ArticleApi.fetchArticleIndex((err,result)=>{
            if(err){
                this.endError();
                return;
            }
            this.setState({articles:result.slice(0,9)});
            this.endSuccess(result.length - 1,result.length > 10);
        },"all",0,11);
    }
    onFetchingNew(){
        ArticleApi.fetchArticleIndex((err,result)=>{
            if(err){
                this.endError();
                return;
            }
            this.setState({articles:this.state.articles.concat(result.slice(0,9))});
            this.endSuccess(result.length - 1,result.length > 10);
        },"all",this.state.articles.length,11);
    }
    private swiper:Swiper;
    componentDidUpdate(prevProps,prevState:ILodableViewState){
        if(prevState.status != "ok" && this.state.status == "ok"){
            if(this.swiper){
                this.swiper.destroy(true,false);
                return;
            }
            this.swiper = new Swiper(this.refs.theSwiper as HTMLDivElement,{
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                  },
            });
            
        }
    }
    renderOK(){
        return <div>
            <div ref="theSwiper" className="swiper-container" style={{height:"200px"}}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                    <div className="swiper-slide">Slide 4</div>
                    <div className="swiper-slide">Slide 5</div>
                    <div className="swiper-slide">Slide 6</div>
                    <div className="swiper-slide">Slide 7</div>
                    <div className="swiper-slide">Slide 8</div>
                    <div className="swiper-slide">Slide 9</div>
                    <div className="swiper-slide">Slide 10</div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
            <ArticleList articles={this.state.articles}/>
        </div> 
    }
}