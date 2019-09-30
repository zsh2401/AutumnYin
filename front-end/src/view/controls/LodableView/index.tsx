import React from 'react'
import RMeScroll from '../RMescroll';
import Paragraph from 'rsuite/lib/Placeholder/PlaceholderParagraph';
export interface ILodableViewState{
    status:"ok" | "error" | "loading";
}
export default abstract class LodableView<TProps extends any,TState extends ILodableViewState> extends React.Component<TProps,TState>{
    componentWillMount(){
        let state:ILodableViewState = {status:"loading"}
        //@ts-ignore
        this.onInitState(state);
        this.setState(state);
    }
    private downHandler(){
        this.onRefresh();
    }
    private upHandler(){
        this.onFetchingNew();
    }
    componentDidMount(){
        this.mainScroll.triggerDownScroll();
    }
    protected get mainScroll():RMeScroll{
        return this.refs["mainScroll"] as RMeScroll;
    }
    render(){
        let view = null;
        switch(this.state.status){
            case "ok":
                view = this.renderOK();
                break;
            case "error":
                view = this.renderError();
            case "loading":
            default:
                view = this.renderLoading();
                break;
        }
        return <div style={{paddingTop:"15px"}}>
            <RMeScroll ref="mainScroll" downCallback={()=>this.downHandler()} upCallback={()=>this.upHandler()}>
            {view}
        </RMeScroll>
        </div> 
    }
    protected endError(){
        this.mainScroll.endError();
        this.setState({status:"error"});
    }
    protected endSuccess(dataSize:number,hasNext:boolean){
        this.mainScroll.endSuccess(dataSize,hasNext);
        this.setState({status:"ok"});
    }
    protected onRefresh(){}
    protected onFetchingNew(){}
    protected onInitState(state:TState){}
    protected renderError(){
        return <div className="text-center">
            <br/>
            <h3 >发生异常</h3>
            <p>请检查网络</p>
            <p><i>How does it feel got no one on your side?</i></p>
        </div> 
    }
    protected renderOK(){}
    protected renderLoading(){
        return <div>
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
            <Paragraph active></Paragraph>
        </div>
    }
}