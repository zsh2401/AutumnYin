import React from 'react'
import ranid from '../../../../common/id-generator'
export class CHomeView extends React.Component{
    readonly id = ranid();
    render(){
        return <div>
            Home-{this.id}
        </div>
    }
}