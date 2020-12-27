import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'src/components'

const Index = lazy(() => import('./index'))

export function RouterMain() {
    return (
        <Router>
            <Layout>
                <Suspense fallback={<div>Loading..</div>}>
                    <Switch>
                        <Route exact path="/" component={Index} />
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    )
}

export default RouterMain
