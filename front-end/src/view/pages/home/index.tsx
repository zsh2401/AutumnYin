import React from 'react'
import StdLayout from '../../layout/StdLayout'
import RSwiper from '../../controls/r-swiper'
import RSwiperSlide from '../../controls/r-swiper/r-swiper-slide'
import SelectTab from '../../controls/select-tab';
import idGenerator from '../../../common/id-generator';
import cm,{getCodesOnly,getNamesOnly} from '../../../common/categroies-manager'
import RMeScroll from '../../controls/react-mescroll';
import cview from '../../controls/category-view'
export interface IndexState{
    selectIndex:number;
}
export default class Index extends React.Component<any,IndexState>{
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
        let that = this;
        return <StdLayout headerTitle="AuTuMnYIN.COM 秋隐">
            <div className="d-flex flex-column h-100">
                <div className="flex-first">
                    <SelectTab items={getNamesOnly()} selectIndex={this.state.selectIndex} selectionChanged={(index)=>this.selectChanged(index)}/>
                </div>
                <div className="flex-end h-100">
                    <RSwiper ref="rswiper" selectIndex={this.state.selectIndex} slideChange={(index)=>that.selectChanged(index)}>
                        {getCodesOnly().map(code=>{
                            return <RSwiperSlide key={code} lazy>{cview(code)}</RSwiperSlide>
                        })}
                    </RSwiper>
                </div>
            </div>
        </StdLayout>
    }
}