import React from 'react'
import idg from '../../../../common/id-generator'
import * as nm from '../../../../common/news-manager'
import MeScroller,{PullDownEventArgs} from '../me-scroller'
export interface NormalCategoryViewProps{
    categroyCode:string;
}
export interface NewsBrief{
    id:string;
    title:string;
    brief:string;
    time:string;
    author:string;
}
export interface NormalCategoryViewState{
    data:NewsBrief[];
}
export default class NormalCategoryView extends React.Component<NormalCategoryViewProps,NormalCategoryViewState>{
    private i:any = idg();
    private mescrollObj:any;
    private pulldownHandler(e:PullDownEventArgs){
        nm.getIndex({
            categroyCode:this.props.categroyCode,
            count:10,
            startAt:0
        }).then(_data=>{
            this.setState({
                data:_data
            });
            e.endSucess();
        }).catch(err=>e.endError())
    }
    private async refresh():Promise<NewsBrief[]>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve([
                    {id:idg(),title:idg(),author:"b",time:"c","brief":"q"},
                    {id:idg(),title:idg(),author:"b",time:"c","brief":"q"},
                ]);
            },2000);
        });
    }
    componentWillMount(){
        this.setState({
            data:[]
        });
    }
    render(){
        let that = this;
        return <MeScroller onPullDown={(e)=>that.pulldownHandler(e)} created={(me)=>that.mescrollObj = me}>
            {this.state.data.map(e=>{
                return <div key={e.id}>{e.title}</div>
            })}
        </MeScroller>
    }
}