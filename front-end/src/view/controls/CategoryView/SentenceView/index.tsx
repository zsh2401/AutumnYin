import React from 'react'
import SentenceApi from '../../../../common/back-api/sentence';
import ISentence from '../../../../model/ISentence'
import Paragraph from 'rsuite/lib/Placeholder/PlaceholderParagraph';
import ValineComment from '../../ValineComment';
import RMeScroll from '../../RMescroll';
import { Divider } from 'rsuite';
export interface SentenceViewState{
    sentence?:ISentence;
}
export default class SentenceView extends React.Component<any,SentenceViewState>{
    private get rMeScroll(){
        return this.refs["rMeScroll"] as RMeScroll;
    }
    componentWillMount(){
        this.setState({
            sentence:null
        });
    }
    componentDidMount(){
        this.rMeScroll.triggerDownScroll();
    }
    down(){
        SentenceApi.getSentence((err,sentence:ISentence)=>{
            if(err){
                this.rMeScroll.endError();
                return;
            }else{
                setTimeout(()=>{
                    this.setState({
                        sentence:sentence
                    });
                    this.rMeScroll.endSuccess(1,false);
                },500);
            }
        });
    }
    render(){
        let view =  this.state.sentence != null ? this.renderContent() : this.renderEmpty()
        return <RMeScroll ref="rMeScroll" downCallback={()=>this.down()}>
            <div className="container">
                {view}
            </div>
        </RMeScroll>
    }
    renderEmpty(){
        return <div>
            <Paragraph active/><Paragraph active/><Paragraph active/><Paragraph active/><Paragraph active/><Paragraph active/>
        </div>
    }
    renderContent(){
        return <div>
            <br/><br/>
            <img className="img-fluid d-block" style={{borderRadius:"10px",maxHeight:"300px",marginLeft:"auto",marginRight:"auto"}} src={this.state.sentence.img}/>
            <br/><br/>
            <h3>{this.state.sentence.content}</h3>
            <p>{this.state.sentence.desc}</p>
            <Divider/>
            <ValineComment path="/"/>
        </div>
    }
}