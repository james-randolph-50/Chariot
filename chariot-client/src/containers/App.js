import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from '../components/Navbar';
import Cars from './Cars';
import CarForm from '../containers/CarForm';
import CarShow from '../containers/CarShow';
import About from '../components/About';
import Contact from '../components/Contact';
// import { getCars } from '../actions/cars';


class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Navbar/>
                            <Container>
                                <Switch>
                                    <Route exact path='/' component={Cars}/>
                                    <Route exact path='/cars' component={Cars}/>
                                    <Route exact path='/cars/new' component={CarForm}/>
                                    <Route path='/cars/:carId' component={CarShow}/>
                                    <Route exact path='/about' component={About}/>
                                    <Route exact path='/contact' component={Contact}/>
                                </Switch>
                            </Container>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;