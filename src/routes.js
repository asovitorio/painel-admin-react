import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom'
import Adm from './pages/Adm'


export default function() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Adm} />

            </Switch>
        </BrowserRouter>
    )
}