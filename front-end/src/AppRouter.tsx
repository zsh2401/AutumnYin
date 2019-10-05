import React from 'react'
import hs from './common/history-provider'
import {Router,Route, Switch, Redirect, withRouter} from 'react-router-dom'
import PHome from './view/pages/home'
import P404 from './view/pages/404'
import PArticle from './view/pages/article'
import PAbout from './view/pages/about'
import PDiscover from './view/pages/discover'
import PStart from './view/pages/start'
import NotLiveRoute from 'react-live-route'
const LiveRoute = withRouter(NotLiveRoute)
const router = <Router history={hs()}>
    <Switch>
        <Route exact path="/"></Route>
        <Route path="/start" component={PStart}></Route>
        <Route path="/p/:id" component={PArticle}></Route>
        <Route path="/about" component={PAbout}></Route>
        <Route path="/discover" component={PDiscover}></Route>
        <Route path="*" component={P404}></Route>
    </Switch>
    <LiveRoute exact path="/" livePath="/p/:id" component={PHome}/>
</Router>
export default router;