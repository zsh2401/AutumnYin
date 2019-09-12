import React, { CSSProperties } from 'react'
import StdLayout from '../../layout/StdLayout'
import CategroiesBar from './CategoriesTab'
import { ViewProvider } from './categroy-views';
export default class Index extends React.Component<any,any>{
    private readonly provider:ViewProvider = new ViewProvider();
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.setState({
            categoryCode:"default"
        });
    }
    render(){
        return <StdLayout headerTitle="AuTuMnYIN.COM 秋隐">
            <CategroiesBar categroies={{"zed":"单言","default":"最新","tec":"科技"}}  selectionChanged={(value)=>this.setState({categoryCode:value})}/>
            {this.provider.get(this.state.categoryCode)}
        </StdLayout>
    }
}