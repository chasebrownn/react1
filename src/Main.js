import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./components/pages/Home'))
const HowToBuy = React.lazy(() => import('./components/pages/HowToBuy'))
const NotFoundPage = React.lazy(() => import('./components/pages/NotFoundPage'))

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/'>
                <Suspense fallback={<div></div>}><Home /></Suspense>
            </Route>
            <Route exact path='/buy'>
                <Suspense fallback={<div></div>}><HowToBuy /></Suspense>
            </Route>
            <Route component={NotFoundPage} />
        </Switch>
    );
}

export default Main;