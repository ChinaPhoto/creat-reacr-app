import React, {Component} from 'react'
// import app from '@/component/App'
// import admin from '@/admin'
import admin from '@/admin'
import Life from '@/component/Life'
import { HashRouter as Router, Route} from 'react-router-dom'
// Switch, Redirect



class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component ={ admin }></Route>
                    <Route exact path="/life" component ={ Life }></Route>
                </div>
            </Router>
        ) 
    }
}

export default Root