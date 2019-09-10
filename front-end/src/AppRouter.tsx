import React from 'react'
import hs from './common/history-provider'
import {Router,Route, Switch} from 'react-router-dom'
import PHome from './view/pages/home'
import P404 from './view/pages/404'
import PArticle from './view/pages/article'
console.log("?");
const router = <Router history={hs()}>
    <Switch>
        <Route exact path="/" component={PHome}></Route>
        <Route path="/p/:id" component={PArticle}></Route>
        <Route path="*" component={P404}></Route>
    </Switch>
</Router>
export default router;