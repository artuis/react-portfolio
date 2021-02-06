import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Container } from '@material-ui/core';
import "./style.css";

function App() {
    return (
            <Router basename="/react-portfolio">
                <Switch>
                    <div id="page-wrapper">
                        <Header />
                            <Container maxWidth="lg">
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/projects" component={Projects}/>
                                <Route exact path="/contact" component={Contact}/>
                            </Container>
                        <Footer />
                    </div>
                    </Switch>
            </Router>
    )
}

export default App;
