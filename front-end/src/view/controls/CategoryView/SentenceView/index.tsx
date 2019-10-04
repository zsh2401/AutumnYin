import React from 'react'
import CateogoryViewBase,{ ICateogoryViewBaseState, ICateogoryViewBaseProps} from '../../CateogoryViewBase';
import SentenceApi from '../../../../common/back-api/sentence'
import ISentence from '../../../../model/ISentence';
import { Divider } from 'rsuite';
import ValineComment from '../../ValineComment';
export interface ISentenceViewState extends ICateogoryViewBaseState{
    sentence:ISentence;
}
export default class SentenceView extends CateogoryViewBase<ICateogoryViewBaseProps,ISentenceViewState>{
    onRefresh(){
        console.log("fetching new");
        SentenceApi.getSentence((err,sentence:ISentence)=>{
            console.log("ok")
            if(err){
                this.endError();
                return;
            }else{
                setTimeout(()=>{
                    this.setState({
                        sentence:sentence
                    });
                    this.endSuccess(1,false);
                },500);
            }
        });
    }
    renderOK(){
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