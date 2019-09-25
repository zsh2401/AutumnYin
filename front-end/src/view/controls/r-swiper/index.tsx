import React, { ReactElement } from 'react'
import Swiper from 'swiper'
import "swiper/dist/css/swiper.min.css"
import RSwiperSlide from './r-swiper-slide';
export interface RSwiperProps{
    children:React.ReactElement[];
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
        let slides:Slide[] = this.props.children.map(el=>{
            let result:Slide = {
                //@ts-ignore
                flag:el.props.lazy ? "waiting" : "loaded",
                element:el
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
        this.displaySlide(this.props.selectIndex || 0);
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