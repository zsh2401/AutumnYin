import React from 'react'
import MeScroll from '../../../controls/react-mescroll'
export default class HomeView extends React.Component{
    private mainMeScroll:MeScroll;
    private downHandler(){
        setTimeout(()=>this.mainMeScroll.endSuccess(),2000);
    }
    render(){
        let that = this;
        return <MeScroll ref={(e)=>{that.mainMeScroll = e}} downCallback={()=>that.downHandler()}>
            <div>wtf</div>
        </MeScroll>
    }
}