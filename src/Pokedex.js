import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Pokecard from './Pokecard';
import Pokegame from './Pokegame';

class Pokedex extends Component{
    render(){
        return (
            <div>
                <h2 style={{marginTop: '0px', paddingTop: '14px'}}>Pokedex</h2>
                {Pokemon.map(e => <Pokecard p_id={e.id.toString()} p_name={e.name} type={e.type} base_experience={e.base_experience} />)}
                <br />
                <br />
                <hr />
                <Pokegame />
            </div>
        );
    }
}

export default Pokedex;