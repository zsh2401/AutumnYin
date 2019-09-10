import React from 'react'
export default class Index extends React.Component<any>{
    render(){
        let id = this.props.match.params.id;
        return <div>
            {id}
        </div>
    }
}