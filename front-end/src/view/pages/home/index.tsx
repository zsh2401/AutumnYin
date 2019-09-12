import React, { CSSProperties } from 'react'
import StdLayout from '../../layout/StdLayout'
import ArticleListView from './controls/ArticleListView'
import CategroiesBar from './controls/CategroiesBar'
import CategroiesRouter from './CategroiesRouter'
import CategroyView from './controls/CategroyView'
export default class Index extends React.Component<any>{
    render(){
        return <StdLayout headerTitle="AYin.com 秋隐">
            <CategroiesBar/>
            <CategroiesRouter/>
        </StdLayout>
    }
}