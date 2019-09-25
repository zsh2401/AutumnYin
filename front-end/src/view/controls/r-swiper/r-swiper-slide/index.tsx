import React, { ReactNode, lazy } from 'react'
import RSwiper from '..';
export interface RSwiperSlideProps{
    lazy?:boolean;
}
export default abstract class RSwiperSlide extends React.Component<RSwiperSlideProps>{
    render(){
        return <div>
            {this.props.children}
        </div>
    }
}