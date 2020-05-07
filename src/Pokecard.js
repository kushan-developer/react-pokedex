import React, { Component } from 'react';
import './Pokecard.css';

function appendZeroes(id){
    let Nid;
    Nid = ('0'.repeat(3 - id.length) + id);
    return Nid;
}

class Pokecard extends Component{
    render(){
        const {p_id, p_name, type, base_experience} = this.props;
        const img_url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + appendZeroes(p_id) + ".png";
        return (
            <div className="Pokecard">
                <div className="Pokecard-image-box">
                    <img className="Pokecard-image" src={img_url} alt={p_name} />
                </div>
                <div className="Pokecard-name">
                    {p_name}
                </div>
                <div className="Pokecard-details">
                    <div className="Pokecard-type">Type: {type}</div>
                    <div className="Pokecard-exp">EXP: {base_experience}</div>
                </div>
            </div>
        );
    }
}

export default Pokecard;