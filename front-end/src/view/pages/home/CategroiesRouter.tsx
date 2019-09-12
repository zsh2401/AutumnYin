import React from 'react'
import hs from '../../../common/history-provider'
import {Router, Route, Switch, Link} from 'react-router-dom'
import Test from './Test'
import P404 from './../../pages/404'
export default class CategroiesRouter extends React.Component{
    render(){
        return<Switch>
                <Route exact path="/" render={props=><div>firstX</div>}></Route>
                <Route path="/two" render={props=><div>two</div>}></Route>
                <Route path="/categroy/*" render={props=><div>404</div>}></Route>
            </Switch>
    }
}