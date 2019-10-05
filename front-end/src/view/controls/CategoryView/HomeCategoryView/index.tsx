import React from 'react'
import IArticle from '../../../../model/IArticle';
import ArticleList from '../../ArticleList';
import ArticleApi from '../../../../common/back-api/article'
import CircularApi from '../../../../common/back-api/circular'
import LodableView, { ICateogoryViewBaseState } from '../../CateogoryViewBase';
import Swiper from 'swiper';
import ICircularItem from '../../../../model/ICircularItem';
import { Divider } from 'rsuite';
import hs from '../../../../common/history-provider'
export interface HomeCategoryViewState extends ICateogoryViewBaseState{
    articles:Array<IArticle>;
    circularItems:Array<ICircularItem>;
    swiperHeight:string;
}
export default class HomeCategoryView extends LodableView<any,HomeCategoryViewState>{
    onInitState(state:HomeCategoryViewState){
        state.articles = null;
        state.circularItems = null;
        state.swiperHeight = null;
    }
    onRefresh(){
        //@ts-ignore
        let tmpState : HomeCategoryViewState= {};
        let hasNext = true;
        let ender = (articlesData : Array<IArticle>,circularData :Array<ICircularItem>)=>{
            if(articlesData){
                tmpState.articles = articlesData; 
            }
            if(circularData){
                tmpState.circularItems = circularData;
            }
            if(tmpState.articles && tmpState.circularItems){
                // console.log(tmpState);
                this.setState(tmpState);
                this.endSuccess(tmpState.articles.length,hasNext);
            }
        };
        ArticleApi.fetchArticleIndex((err,result)=>{
            // console.log("ArticleApi callback");
            if(this.state.status === "error" || err){
                this.endError();
                return;
            }
            hasNext = result.length > 10;
            ender(result.slice(0,10),null);
        },"all",0,11);
        CircularApi.getCircular((err,result)=>{
            // console.log("CircularApi callback");
            if(this.state.status === "error" || err){
                this.endError();
                return;
            }
            ender(null,result);
        })
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
    componentDidUpdate(prevProps,prevState:HomeCategoryViewState){
        if(prevState.status != "ok" && this.state.status == "ok"){
            this.swiper = new Swiper(this.refs.theSwiper as HTMLDivElement,{
                autoplay:{
                    delay:3000
                },
                loop:true,
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                  },
            });
        }
        if(this.state.status == "ok" && this.state.swiperHeight == null){
            this.bindSwiperHeightEvent();
            this.updateSwiperHeight();
        }
    }
    componentDidMount(){
        super.componentDidMount();
    }
    private bindSwiperHeightEvent(){
        let that =this;
        window.addEventListener("resize",()=>{
            that.updateSwiperHeight();
        })
    }
    private updateSwiperHeight(){
        let containerW = (this.refs.theWrapper as HTMLDivElement).offsetWidth;
        this.setState({
            swiperHeight : (containerW * 0.4285) + "px"
        })
    }
    renderOK(){
        return <div className="xxxx" ref="theWrapper">
            <div ref="theSwiper" className="swiper-container w-100" style={{height:this.state.swiperHeight || "200px"}}>
                <div className="swiper-wrapper">
                    {
                        this.state.circularItems.map(c=><CircularItemView key={c.id} circularItem={c}/>)
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
            <Divider>最新文章</Divider>
            <ArticleList articles={this.state.articles}/>
        </div> 
    }
}
interface CircularItemViewProps{
    circularItem:ICircularItem;
}
class CircularItemView extends React.Component<CircularItemViewProps>{
    private onClick(){
        let target = this.props.circularItem.target;
        let url = target.substring(2);
        let type = target[1];
        switch (type) {
            case "c":
                window.location.href = url;
                break;
            case "p":
                hs().push(url)
                break;
            case "o":
                window.open(url);
                break;
            case "a":
                hs().push("/p/" + url);
                break;
            default:
                window.open(target)
                break;
        }
    }
    render(){
        return <div className="swiper-slide" onClick={()=>this.onClick()}>
            <img className="img-fluid w-100" src={this.props.circularItem.img_src}/>
        </div>
    }
}