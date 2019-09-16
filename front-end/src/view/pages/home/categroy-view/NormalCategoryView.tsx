import React from 'react'
import idg from '../../../../common/id-generator'
import MeScroller,{PullDownEventArgs} from '../me-scroller'
export interface NormalCategoryViewProps{
    categroyCode:string;
}
export default class NormalCategoryView<TModel> extends React.Component<NormalCategoryViewProps>{
    private i:any = idg();
    private mescrollObj:any;
    private pulldownHandler(e:PullDownEventArgs){
        refresh().then
    }
    private async refresh():Promise<TModel>{
        return new Promise((resolve,reject)=>{

        });
    }
    componentDidMount(){
        
    }
    render(){
        let that = this;
        return <MeScroller onPullDown={(e)=>that.pulldownHandler(e)} created={(me)=>that.mescrollObj = me}>
            {this.props.categroyCode}
        </MeScroller>
    }
}