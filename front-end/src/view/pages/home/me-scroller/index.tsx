import React from 'react'
import idg from '../../../../common/id-generator'
import MeScroll from 'mescroll'
import "mescroll/src/mescroll.min.css"
export interface MeScrollerProps{
    onPullDown?:(e:PullDownEventArgs)=>void;
    created?:(mescroll:any)=>void;
}
export interface PullDownEventArgs{
    endSucess:Function;
    endError:Function;
}
export default class MeScroller extends React.Component<MeScrollerProps>{
    private readonly id = idg();
    private mescroll:any;
    private isFirstPullDown:boolean = true;
    private pulldownHandler(){
        if(!this.isFirstPullDown && this.props.onPullDown){ 
            this.props.onPullDown({endSucess:()=>this.mescroll.endSuccess(),endError:()=>this.mescroll.endErr()})
        }
        this.isFirstPullDown = false;
    }
    componentDidMount(){
        this.mescroll = new MeScroll(this.id, {  
            down: {callback: ()=>this.pulldownHandler() },
            up:{use:false}
        });
        if(this.props.created){
            this.props.created(this.mescroll);
        }
    }
    render(){
        return <div id={this.id} className="mescroll" style={{height:"100%",position:"fixed"}}>
            <div>
                {this.props.children}
            </div>
        </div>
    }
}