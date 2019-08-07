import React, {Component} from 'react'
// import app from '@/component/App'
// import admin from '@/admin'
import Admin from '@/admin'
import App from '@/app'
import Login from '@/login'
import Home from '@/pages/home'
import Button from '@/pages/ui/button'
// import NoMatch from '@/pages/nomatch'
import Loadings from '@/pages/ui/loadings'
import Notice from '@/pages/ui/notice'
import Messages from '@/pages/ui/messages'
import Tabs from '@/pages/ui/tabs'
import Gallery from '@/pages/ui/gallery'
import Carousel from '@/pages/ui/carousel'
import Modal from '@/pages/ui/modals.js'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
// Switch, Redirect



class Root extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route  path="/login" component ={ Login }></Route>
                        <Route  path="/" render= { () => {
                            return  (
                                    <Admin>
                                        <Switch>
                                            <Route  path= "/home" component= { Home }></Route>
                                            <Route path= "/ui/buttons" component= { Button }></Route>
                                            <Route path= "/ui/modals" component= { Modal }></Route>
                                            <Route path="/ui/loadings" component={Loadings} />
                                            <Route path="/ui/notification" component={Notice} />
                                            <Route path="/ui/messages" component={Messages} />
                                            <Route path="/ui/tabs" component={Tabs} />
                                            <Route path="/ui/gallery" component={Gallery} />
                                            <Route path="/ui/carousel" component={Carousel} />
                                        </Switch>    
                                    </Admin>
                                    )
                                }         
                        }></Route>   
                    </Switch>
                </App>
            </Router>
        ) 
    }
}

export default Root