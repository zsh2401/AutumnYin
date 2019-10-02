import React from 'react'
import StdLayout from '../../layout/StdLayout'
import RSwiper from '../../controls/RSwiper'
import RSwiperSlide from '../../controls/RSwiper/RSwiperSlide'
import SelectTab from '../../controls/TabMenu';
import cm,{getCodesOnly,getNamesOnly} from '../../../common/categroies-manager'
import cview from '../../controls/CategoryView'
import { Divider } from 'rsuite';
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
            <div className="d-flex flex-column h-100 container">
                <div className="flex-first" style={{paddingTop:"15px"}}>
                    <SelectTab items={getNamesOnly()} selectIndex={this.state.selectIndex} selectionChanged={(index)=>this.selectChanged(index)}/>
                </div>
                <div className="flex-end">
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