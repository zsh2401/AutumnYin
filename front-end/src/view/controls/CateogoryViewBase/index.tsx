import React from 'react'
import RMeScroll from '../RMescroll';
import Paragraph from 'rsuite/lib/Placeholder/PlaceholderParagraph';
import { ICateogoryViewBaseState,getDefaultState } from './State';
import {ICateogoryViewBaseProps} from './Props'
export * from './Props'
export * from './State'
export default abstract class CateogoryViewBase<TProps extends ICateogoryViewBaseProps = ICateogoryViewBaseProps,TState extends ICateogoryViewBaseState = ICateogoryViewBaseState>
 extends React.Component<TProps,TState>{
    protected triggerDownWhenDidMount:boolean = true;
    componentWillMount(){
        let state = getDefaultState();
        //@ts-ignore
        this.onInitState(state);
        this.setState(state);
    }
    private downHandler(){
        this.onRefresh(this.updater);
    }
    private upHandler(){
        this.onFetchingNew(this.updater);
    }
    private updater(key:string,v:string){
        let _newData = {};
        _newData[key] = v;
        this.setState(_newData);
    }
    componentDidMount(){
        if(this.triggerDownWhenDidMount){
            this.mainScroll.triggerDownScroll();
        }
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
        return <div>
            <RMeScroll ref="mainScroll" downCallback={()=>this.downHandler()} upCallback={()=>this.upHandler()}>
                <div style={{paddingTop:"15px"}}>
                    {view}
                </div>
                
            </RMeScroll>
        </div> 
    }
    protected endError(){
        this.setState({status:"error"});
        this.mainScroll.endError();
    }
    protected endSuccess(dataSize:number,hasNext:boolean){
        this.mainScroll.endSuccess(dataSize,hasNext);
        this.setState({status:"ok"});
    }
    protected onRefresh(updater:(key:string,value:any)=>void){}
    protected onFetchingNew(updater:(key:string,value:any)=>void){}
    protected onInitState(state:TState){}
    protected renderError(){
        return <div className="text-center"><br/>
            <h3 >发生异常</h3>
            <p>请检查网络</p>
            <p><i>How does it feel got no one on your side?</i></p>
        </div> 
    }
    protected renderOK(){
        return <div>OK</div>
    }
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