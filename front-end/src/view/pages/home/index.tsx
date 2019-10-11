import React from 'react'
import StdLayout from '../../layout/StdLayout'
import RSwiper from '../../controls/RSwiper'
import RSwiperSlide from '../../controls/RSwiper/RSwiperSlide'
import SelectTab from '../../controls/TabMenu';
import cm,{getCodesOnly,getNamesOnly} from '../../../common/categroies-manager'
import cview from '../../controls/CategoryView'
import { Divider } from 'rsuite';
import DebugMx from '../../../common/debug-mx';
import hs from '../../../common/history-provider'
import { Redirect } from 'react-router';
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
        if(DebugMx.isFirstTimeLaunchApp){
            hs().push("/start");
            return null;
        }
        let that = this;
        return <StdLayout headerTitle="AuTuMnYIN.COM 秋隐">
            <div className="d-flex flex-column h-100 container c-container" style={{position:"relative",paddingTop:"20px"}}>
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