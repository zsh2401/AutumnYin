import React from 'react'
import "./index.css"
import marked from 'marked'
export interface MarkdownViewProps{
    source:string;
}
export default class MarkdownView extends React.Component<MarkdownViewProps>{
    private bilivElements : Array<HTMLIFrameElement>
    private mdViewContainer: HTMLElement;
    resizeBiliV(){
        let cWidth = this.mdViewContainer.clientWidth;
        for(let i = 0;i<this.bilivElements.length;i++){
            let crt = this.bilivElements[i];
            crt.style.width =  cWidth + "px";
            crt.style.height = (cWidth * 0.66) + "px";
        }
    }
    bindEvent(){
        let that = this;
        window.addEventListener("resize",()=>{
            that.resizeBiliV();
        });
    }
    componentDidMount(){
        this.bilivElements = findAllBilivElements();
        this.mdViewContainer = document.querySelector(".md-view");
        this.resizeBiliV();
        this.bindEvent();
    }
    render(){
        return <article className="md-view" dangerouslySetInnerHTML={{__html:marked(this.props.source)}}></article>
    }
}
const SRC_TEST = /\/\/player.bilibili.com\/player.html/i;
function findAllBilivElements():Array<HTMLIFrameElement>{
    let result = [];
    let iframeElements= document.getElementsByTagName("iframe");
    for(let i = 0;i<iframeElements.length;i++){
        let crt = iframeElements[i];
        if(crt.src.search(SRC_TEST) > 0){
            result.push(crt);
        }
    }
    return result;
}