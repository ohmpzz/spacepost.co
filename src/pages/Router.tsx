import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'src/components'

const Index = lazy(() => import('./index'))
const Articles = lazy(() => import('./Articles'))
const Blogs = lazy(() => import('./Blogs'))
const Reports = lazy(() => import('./Reports'))

export function RouterMain() {
    return (
        <Router>
            <Layout>
                <Suspense fallback={<div>Loading..</div>}>
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/articles" component={Articles} />
                        <Route path="/blogs" component={Blogs} />
                        <Route path="/reports" component={Reports} />
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    )
}

export default RouterMain
