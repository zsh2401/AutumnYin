import React, { CSSProperties } from 'react'
import StdLayout from '../../layout/StdLayout'
import CategroiesBar from './CategoriesTab'
import MeScroller from './MeScroller'
import CategroyView from './CategroyView';
export default class Index extends React.Component<any,any>{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.setState({
            crtCCode:"tec",
        });
    }
    onCTabUpdate(code:string){
        this.setState({
            crtCCode:code
        })
    }
    onCViewUpdate(code:string){
        this.setState({
            crtCCode:code
        })
    }
    render(){
        return <StdLayout headerTitle="AuTuMnYIN.COM 秋隐">
            <CategroiesBar selected={this.state.crtCCode} selectionChanged={(c)=>this.onCTabUpdate(c)}/>
            <CategroyView selected={this.state.crtCCode} onCategoryChanged={(c)=>this.onCViewUpdate(c)}></CategroyView>
        </StdLayout>
    }
}