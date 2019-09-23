import React, { CSSProperties } from 'react'
import marked from 'marked'
import "./index.css"
export interface MarkdownViewProps{
    content:string;
}
export default class MarkdownView extends React.Component<MarkdownViewProps>
{
    render(){
        return <div className="md-view-box" dangerouslySetInnerHTML={{__html:marked(this.props.content || "")}}>
        </div>
    }
}