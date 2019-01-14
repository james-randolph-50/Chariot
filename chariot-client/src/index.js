import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    
    document.getElementById('root')
    );

registerServiceWorker();

// Draft of Router

// ReactDOM.render((
//     <Router>
//         <div>
// //         <React.Fragment>
// //             <Route path="/" component={Home} />
// //             <Route exact path="/about" component={About} />
// //             <Route exact path="/login" component={Login} />
// //         </React.Fragment>
// // </Router>),
// //     document.getElementById('root')
// // );
// </div>
