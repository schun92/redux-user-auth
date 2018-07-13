import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import About from './about';
import SecretList from './secret_list';
import MovieQuote from './movie_quote';

const App = () => (
    <div>
        <Nav />
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/secret-list" component={SecretList}/>
            <Route path="/movie-quote" component={MovieQuote}/>

        </div>
    </div>
);

export default App;
