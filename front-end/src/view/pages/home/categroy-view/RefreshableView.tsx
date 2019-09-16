import MeScroller from '../me-scroller'
import React from 'react'
export default abstract class RefreshableView extends React.Component{
    private _mescrollObj:any;
    onRefreshing(){}
    onRefrehed(){}
    endRefreshSuccess(){
        this._mescrollObj.endSuccess();
        this.onRefrehed();
    }
    endRefreshErr(){
        this._mescrollObj.endErr();
        this.onRefrehed();
    }
    render(){
        let that = this;
        return <MeScroller onPullDown={()=>that.onRefreshing()} created={(e)=>that._mescrollObj = e}>
            {this.props.children}
        </MeScroller>
    }
}