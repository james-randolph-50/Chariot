//import React from 'react';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    
    document.getElementById('root'));
    registerServiceWorker();


// Draft of Router

ReactDOM.render((
    <Router>
        <div>
         <React.Fragment>
             <Route path="/" component={Home} />
             <Route exact path="/about" component={About} />
             <Route exact path="/login" component={Login} />
         </React.Fragment>
        </div>
 </Router>),
     document.getElementById('root')
 );


// Drafts of URL Paths

class Home extends Component {
    render() {
        return (
            <h1>Home Page</h1>
        );
    }
}

class About extends Component {
    render() {
        return (
            <h1>About Page</h1>
        );
    }
}

class Login extends Component {
    render() {
        return (
            <h1>Login Page</h1>
        );
    }
}