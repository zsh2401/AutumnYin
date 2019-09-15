import React from 'react'
import Swiper from 'swiper'
import idg from '../../../../common/id-generator'
import "swiper/dist/css/swiper.min.css"
import cview from '../categroy-view'
import {getCodesOnly} from '../../../../common/categroies-manager'
export interface CategroyProps{
    selected:string;
    onCategoryChanged:(code:string)=>void;
}
export interface Categroies{
    [code:string]:string;
}
export default class CategroyView extends React.Component<CategroyProps>{
    private swiper:Swiper;
    private codes:Array<string> = [];
    componentWillMount(){
        this.codes = getCodesOnly();
    }
    componentDidMount(){
        this.swiper = new Swiper(".swiper-container")
        this.slideToCode(this.props.selected);
        this.swiper.on("slideChange",()=>{
            this.props.onCategoryChanged(this.codes[this.swiper.realIndex])
        })
    }
    shouldComponentUpdate(nextProps:CategroyProps,nextState:any){
        this.slideToCode(nextProps.selected);
        return false;
    }
    slideToCode(selectedCode:string){
        let index = this.codes.findIndex(code=>{
            return code == selectedCode
        })
        this.swiper.slideTo(index);
    }
    render(){
        let cViews = []
        getCodesOnly().forEach(code=>cViews.push(cview(code)))
        return<div className="swiper-container" style={{position:"fixed",height:"100%",width:"100%"}}>
            <div className="swiper-wrapper">
            {
                cViews.map((el)=>{
                    return <div key={idg()} className="swiper-slide">{el}</div>
                })
            }
            </div>
        </div>
    }
}