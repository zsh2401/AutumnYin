import React from 'react'
import {Input,Form,FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, CheckboxGroup, DatePicker} from 'rsuite'
import IArticle from '../../../../model/Article';
import { Button } from 'react-bootstrap';
import marked from 'marked'
import ArticleApi from '../../../../common/article-api';
export interface ArticlePostViewState{
    contentPreview:string;
    article:IArticle;
}
export default class ArticlePostView extends React.Component<any,ArticlePostViewState>{
    fill(){}
    submit(){
        ArticleApi.postArticle(this.state.article,(number)=>{console.log(number)});
    }
    doCheck():boolean{
        return false;
    }
    previewMd(){
        this.setState({
            contentPreview:marked(this.state.article.content || "")
        });
    }
    componentWillMount(){
        //@ts-ignore
        let pState:ArticlePostViewState = {contentPreview:"markdown预览",article:{}};
        this.setState(pState);
    }
    componentDidMount(){
        this.fill();
    }
    updateData(key:string,value:any){
        let _new = {article:this.state.article};
        _new.article[key] = value;
        this.setState(_new);
    }
    render(){
        let height = (document.documentElement.clientHeight - 200 )+ "px";
        let that = this;
        return <div>
            <h1>秋隐投稿<small>此页面仅仅适配PC</small></h1>
            <div className="row">
                <div className="col-md-5" style={{height:height,overflowY:"auto"}}>
                    {this.form()}
                </div>
                <div className="col-md-7" style={{height:height,overflowY:"auto"}}>
                    <div dangerouslySetInnerHTML={{__html:this.state.contentPreview}}></div>
                </div>
            </div>
            <div style={{marginTop:"30px"}} className="text-center">总有一天,冰会化成水的</div>
        </div>

    }
    form(){
        let that = this;
        return <Form>
        <FormGroup>
            <ControlLabel>文章唯一标识符</ControlLabel>
            <Input placeholder="必填,示例:zsh_Test" onChange={(v)=>that.updateData("id",v)}/>
        </FormGroup>

        <FormGroup>
            <ControlLabel>标题</ControlLabel>
            <Input placeholder="必填" onChange={(v)=>that.updateData("title",v)}/>
        </FormGroup>

        <FormGroup>
            <ControlLabel>作者</ControlLabel>
            <Input  placeholder="必填" onChange={(v)=>that.updateData("author",v)}/>
        </FormGroup>

        <FormGroup>
            <ControlLabel>头图链接</ControlLabel>
            <Input placeholder="必填" onChange={(v)=>that.updateData("img",v)}/>
        </FormGroup>

        <FormGroup>
            <ControlLabel>发布时间</ControlLabel>
            <DatePicker onChange={(v)=>that.updateData("crt_time",JSON.stringify(v))}>发布时间</DatePicker>
        </FormGroup>

        <CheckboxGroup inline>
            <Checkbox onChange={(v,c)=>that.updateData("reprint",c)}>转载</Checkbox>
            <Checkbox onChange={(v,c)=>that.updateData("hide",c)}>隐藏</Checkbox>
            <Checkbox onChange={(v,c)=>that.updateData("comment",c)} defaultChecked>开启评论</Checkbox>
        </CheckboxGroup>
        

        <CheckboxGroup>
            <ControlLabel>简介</ControlLabel>
            <Input
                onChange={(v)=>that.updateData("summary",v)}
                componentClass="textarea"
                rows={3}
                placeholder="不超过15字"/>
            <ControlLabel>内容</ControlLabel>
            <Input
                onChange={(v)=>that.updateData("content",v)}
                componentClass="textarea"
                rows={20}
                placeholder="Markdown"/> 
        </CheckboxGroup>

        <br/>
        <Button onClick={()=>this.submit()}>提交</Button>
        <Button style={{marginLeft:"30px"}} onClick={()=>this.previewMd()}>预览</Button>
    </Form>
    }
}