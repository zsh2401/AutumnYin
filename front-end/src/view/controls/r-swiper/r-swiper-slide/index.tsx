import React, { ReactNode } from 'react'
export default abstract class RSwiperSlide extends React.Component{
    onSlide(){
        console.log("on slide")
    }
    render(){
        return <div className="swiper-slide">
            {this.props.children}
        </div>
    }
}