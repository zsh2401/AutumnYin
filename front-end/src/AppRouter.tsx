import React from 'react'
import hs from './common/history-provider'
import {Router,Route, Switch, Redirect, withRouter} from 'react-router-dom'
import PHome from './view/pages/home'
import P404 from './view/pages/404'
import PArticle from './view/pages/article'
// import PAdmin from './view/pages/admin'
import NotLiveRoute from 'react-live-route'
const LiveRoute = withRouter(NotLiveRoute)
const router = <Router history={hs()}>
    <Switch>
        <Route exact path="/"></Route>
        <Route path="/p/:id" component={PArticle}></Route>
        <Route path="*" component={P404}></Route>
    </Switch>
    <LiveRoute exact path="/" livePath="/p/:id" component={PHome}/>
</Router>
export default router;