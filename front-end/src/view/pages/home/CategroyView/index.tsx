import React from 'react'
import Swiper from 'swiper'
import idg from '../../../../common/id-generator'
import "swiper/dist/css/swiper.min.css"
import cm,{getCodesOnly} from '../../../../common/categroies-manager'
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
        this.swiper.on("slideChange",()=>{
            this.props.onCategoryChanged(this.codes[this.swiper.realIndex])
        })
    }
    shouldComponentUpdate(nextProps:CategroyProps,nextState:any){
        let index = this.codes.findIndex(code=>{
            return code == nextProps.selected
        })
        this.swiper.slideTo(index);
        return false;
    }
    render(){
        let cViews = []
        getCodesOnly().forEach(code=>cViews.push(cViewFactory(code)))
        return<div className="swiper-container">
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
function cViewFactory(code:string){
    switch(code){
        case "default":
            return <div>{code}</div>
        default:
            return <div>{code}</div>
    }
}