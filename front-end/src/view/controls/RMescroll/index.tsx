import React from 'react'
import RMeScrollProps from './RMeScrollProps'
import RMeScrollState from './RMeScrollState'
import MeScroll from "../../../lib/mescroll/"
export default class RMeScroll extends React.Component<RMeScrollProps,RMeScrollState>{
    private meScrollDiv:HTMLDivElement = null;
    private mescrollObj:any = null;
    componentDidMount(){
        this.initMeScroll();
    }
    private initMeScroll(){
        let up:any = {use:false}
        if(this.props.upCallback){
            up = {
                callback:(page)=>this.upCallback(page),
                auto:false,
                noMoreSize:0
            }
        }
        this.mescrollObj = new MeScroll(this.meScrollDiv,
            {
            down:{callback:()=>this.downCallback(),auto:false},
            up:up,
            }
        );
    }
    private downCallback(){
        if(this.props.downCallback){
            this.props.downCallback();
        }
    }
    private upCallback(page:any){
        if(this.props.upCallback){
            this.props.upCallback(page);
        }
    }
    public triggerDownScroll(){
        setTimeout(()=>this.mescrollObj.triggerDownScroll(),500);
        
    }
    public endError(){
        this.mescrollObj.endErr();
    }
    public endSuccess(dataSize:number,hasNext:boolean){
        this.mescrollObj.endSuccess(dataSize,hasNext);
    }

    public endBySize(size:number){
        this.mescrollObj.endBySize(size);
    }

    render(){
        return <div className="mescroll"  style={{height:"100%",position:"fixed"}} ref={_div=>this.meScrollDiv = _div}>
            <div style={{paddingRight:"10px"}}>
                {this.props.children}
            </div>
        </div>
    }
}