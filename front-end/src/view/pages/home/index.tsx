import React, { CSSProperties } from 'react'
import StdLayout from '../../layout/StdLayout'
import CategroiesBar from './categroies-tab'
import CategroyView from './categroies-swiper';
import RSwiper from '../../controls/r-swiper'
import RSwiperSlide from '../../controls/r-swiper/r-swiper-slide'
import SelectTab from '../../controls/select-tab';
import idGenerator from '../../../common/id-generator';
export interface IndexState{
    selectIndex:number;
}
export default class Index extends React.Component<any,IndexState>{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.setState({
            selectIndex:1,
        });
    }
    selectChanged(index:number){
        this.setState({
            selectIndex:index,
        });
    }
    render(){
        let i = 0;
        let that = this;
        return <StdLayout headerTitle="AuTuMnYIN.COM 秋隐">
            <div className="d-flex flex-column h-100">
                <div className="flex-first">
                    <SelectTab items={["A","b"]} selectIndex={this.state.selectIndex} selectionChanged={(index)=>this.selectChanged(index)}/>
                </div>
                <div className="flex-end h-100">
                    <RSwiper ref="rswiper" selectIndex={this.state.selectIndex} slideChange={(index)=>that.selectChanged(index)}>
                        <RSwiperSlide ref={"slide_" + i++} lazy={true}><Fuck/></RSwiperSlide>
                        <RSwiperSlide ref={"slide_" + i++} lazy={true}><Fuck/></RSwiperSlide>
                    </RSwiper>
                </div>
            </div>
        </StdLayout>
    }
}
function Fuck(){
    return <div>{idGenerator()}</div>;
}