import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'src/components'

const Index = lazy(() => import('./index'))
const Articles = lazy(() => import('./Articles'))
const ArticleDetail = lazy(() => import('./ArticleDetail'))
const Blogs = lazy(() => import('./Blogs'))
const Reports = lazy(() => import('./Reports'))

export function RouterMain() {
    return (
        <Router>
            <Layout>
                <Suspense fallback={<div>Loading..</div>}>
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route exact path="/articles" component={Articles} />
                        <Route exact path="/blogs" component={Blogs} />
                        <Route exact path="/reports" component={Reports} />
                        <Route path="/:api/:id" component={ArticleDetail} />
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    )
}

export default RouterMain
