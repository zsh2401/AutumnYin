import React, { ReactElement } from 'react'
import Swiper from 'swiper'
import "swiper/dist/css/swiper.min.css"
import RSwiperSlide from './RSwiperSlide';
export interface RSwiperProps{
    children:React.ReactElement<RSwiperSlide>[];
    slideChange?:(slideIndex:number)=>void;
    selectIndex?:number;
}
export interface RSwiperState{
    slides:Slide[];
}
export interface Slide{
    flag:"waiting" | "loaded";
    element:ReactElement;
}
export default class RSwiper extends React.Component<RSwiperProps,RSwiperState>{
    public swiper:Swiper = null;
    componentWillMount(){
        let selectIndex = this.props.selectIndex || 0;
        let slides:Slide[] = this.props.children.map((el,index)=>{
            let result:Slide = {
                //@ts-ignore
                flag:(!el.props.lazy) || selectIndex == index ? "loaded" : "waiting",
                //@ts-ignore
                element:(!el.props.lazy) || selectIndex == index ? el : null,
            }
            return result;
        });
        this.setState({
            slides:slides
        });
    }
    private displaySlide(index:number){
        if(this.state.slides[index].flag == "waiting"){
            this.state.slides[index].element = this.props.children[index];
            this.state.slides[index].flag = "loaded";
        }
    }
    componentDidUpdate(){
        this.swiper.slideTo(this.props.selectIndex || 0);
    }
    componentDidMount(){
        this.swiper = new Swiper(this.refs.mainDiv as HTMLDivElement,{
            initialSlide:this.props.selectIndex || 0
        });
        this.swiper.on("slideChange",()=>{
            if(this.props.slideChange){
                let index = this.swiper.realIndex;
                this.displaySlide(index)
                this.props.slideChange(index);
            }
        })
        this.swiper.slideTo(this.props.selectIndex || 0);
    }
    render(){
        return <div ref="mainDiv" className="swiper-container h-100">
            <div className="swiper-wrapper">
                {this.state.slides.map((slide,index)=>{
                    return <div className="swiper-slide" key={index}>{slide.element}</div>
                })}
            </div>
        </div>
    }
}