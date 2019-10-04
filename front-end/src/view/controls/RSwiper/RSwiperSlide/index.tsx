import React from 'react'
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