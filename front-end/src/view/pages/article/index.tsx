import React from 'react'
import marked from 'marked'
export default class Index extends React.Component<any>{
    render(){
        let id = this.props.match.params.id;
        return <div>
            {id}
        </div>
    }
}