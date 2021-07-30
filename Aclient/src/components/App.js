import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Cake } from './Cake';
import { Nav } from './Nav';
import {Comments} from './Comments';
import {Login} from './Login';
import {Register} from './Register';
import {Users} from './Users';
import {Consumers} from './Consumers';
import {Home} from './Home';
import {Request} from './Request';
import { Contact } from './Contact'

export function App() {

    return (
        <div id="app">
            <Nav />
            
            <Switch>
                <Route path="/cake" component={Cake} />
                <Route path="/comments" component={Comments} />
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/users" component={Users} />
                <Route path="/consumers" component={Consumers} />
                <Route path="/request" component={Request} />
                <Route path="/contact" component={Contact} />

            </Switch>
        </div>
    )

}