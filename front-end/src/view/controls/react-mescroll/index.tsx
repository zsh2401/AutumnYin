import React from 'react'
import RMeScrollProps from './RMeScrollProps'
import RMeScrollState from './RMeScrollState'
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
                callback:(page)=>this.upCallback(page)
            }
        }
        //@ts-ignore
        this.mescrollObj = new MeScroll(this.meScrollDiv,
            {
            down:{callback:()=>this.downCallback()},
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
    public endError(){
        this.mescrollObj.endErr();
    }
    public endSuccess(){
        this.mescrollObj.endSuccess();
    }
    render(){
        return <div className="mescroll"  style={{height:"100%",position:"fixed"}} ref={_div=>this.meScrollDiv = _div}>
            <div>
                {this.props.children}
            </div>
        </div>
    }
}