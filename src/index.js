import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './Pokedex';
import './index.css';

class App extends Component{
    render(){
        return(
            <div>
                <Pokedex />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));