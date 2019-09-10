import React, { CSSProperties } from 'react'
import StdLayout from '../../layout/StdLayout'
import ArticleListView from '../../controls/ArticleListView'
export default class Index extends React.Component<any>{
    render(){
        return <StdLayout  headerTitle="AYin.com 秋隐">
            <ArticleListView/>
        </StdLayout>
    }
}