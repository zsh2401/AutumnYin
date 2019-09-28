import React from 'react'
import StdLayout from '../../layout/StdLayout';
import { Switch, Route } from 'react-router';
import AList from './ArticleList'
import APost from './ArticlePostView'
export default class Admin extends React.Component{
    render(){
        return <StdLayout>
            <div className="container">
                <Switch>
                    <Route exact path="/admin/" component={AList}></Route>
                    <Route exact path="/admin/new" component={APost}></Route>
                    <Route path="*" render={()=><h1>404 NOT FOUND</h1>}></Route>
                </Switch>
            </div>
        </StdLayout>
    }
}