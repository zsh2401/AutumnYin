import React from 'react'
import Swiper from 'swiper'
import "swiper/dist/css/swiper.min.css"
import RSwiperSlide from './r-swiper-slide';
export interface RSwiperProps{
    children:React.ReactElement<RSwiperSlide>[];
    slideChange:(slideIndex:number)=>void;
}
export default class RSwiper extends React.Component<RSwiperProps>{
    public swiper:Swiper = null;
    componentDidMount(){
        this.swiper = new Swiper(this.refs.mainDiv as HTMLDivElement);
        this.swiper.on("slideChange",()=>{
            //@ts-ignore
            this.props.slideChange(this.swiper.realIndex);
        })
    }
    public slideTo(index:number){
        this.swiper.slideTo(index);
    }
    render(){
        return <div ref="mainDiv" className="swiper-container" >
            <div className="swiper-wrapper">
                {this.props.children.map(el=>{
                    e
                })}
            </div>
        </div>
    }
}