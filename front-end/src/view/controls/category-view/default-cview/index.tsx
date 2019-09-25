import React from 'react'
import RMeScroll from '../../react-mescroll';
export interface DefaultCategoryViewProps{
    categoryCode:string;
}
export default class DefaultCategoryView extends React.Component<DefaultCategoryViewProps>{
    private get rMeScroll(){
       return this.refs["mescroll"] as RMeScroll;
    }
    componentDidMount(){
        this.rMeScroll.triggerDownScroll();
    }
    down(){
        setTimeout(()=>{
            this.rMeScroll.endSuccess();
        },2000)
    }
    render(){
        return <RMeScroll ref="mescroll" downCallback={()=>{this.down()}}>
            <div>{this.props.categoryCode}</div>
        </RMeScroll>
    }
}