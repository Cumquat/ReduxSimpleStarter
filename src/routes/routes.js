import React from 'react';
import {Route, Switch} from 'react-router';



import Welcome from '../components/layout/welcome';
import NotFound from '../components/notfound/not_found';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={Welcome}/>
        {/*<Route path='/about' component={About}/>*/}
        <Route path='/admin' component={Admin}/>
    
        <Route component={NotFound}/>
    </Switch>
);

export default Routes;