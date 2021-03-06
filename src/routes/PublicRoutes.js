import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

const LoginComponent = lazy(() => import('../pages/Login/index'));

function PublicRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route path={SLUGS.login} component={LoginComponent} exact />
                <Route path={SLUGS.signup} render={() => <div>signup</div>} />
                <Route path={SLUGS.forgotPassword} render={() => <div>forgotPassword</div>} />
                <Redirect to={SLUGS.login} />
            </Switch>
        </Suspense>
    );
}

export default PublicRoutes;
