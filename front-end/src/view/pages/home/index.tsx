import React, { CSSProperties } from 'react'
import StdLayout from '../../layout/StdLayout'
import ArticleList from '../../controls/ArticleListView'
export default class Index extends React.Component<any>{
    render(){
        return <StdLayout topBarTitle="Home">
            <ArticleList></ArticleList>
        </StdLayout>
    }
}