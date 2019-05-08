import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router/router';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';
import '@/style/base.less'
// ReactDOM.render(<App />, document.getElementById('root'));

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component></Component>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App);

if(module.hot) {
    module.hot.accept('./router/router.js',() => {
        render(App);
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
