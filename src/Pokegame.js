import React, { Component } from 'react';
import { GenerateStack } from './Pokemon';
import Pokecard from './Pokecard';
import './Pokegame.css';

function calculateScore(stack){
    let totalScore = 0;
    for(let i = 0; i < stack.length; i++){
        totalScore += stack[i].base_experience;
    }
    return totalScore;
}

class Pokegame extends Component{
    render() {
        const stack1 = Array.from(GenerateStack());
        const stack2 = Array.from(GenerateStack());
        const s1Score = calculateScore(stack1);
        const s2Score = calculateScore(stack2);
        return (
            <div>
                <h2 style={{}}>Pokegame</h2>
                <div className="Stack1">
                    <h3 className={(s1Score > s2Score) ? 'winning-hand' : 'losing-hand'}>{(s1Score > s2Score) ? 'Winning Hand' : 'Losing Hand'}</h3>
                    <p className="score-card">Total experience: {s1Score}</p>
                    {stack1.map(e => <Pokecard p_id={e.id.toString()} p_name={e.name} type={e.type} base_experience={e.base_experience} />)}
                </div>
                <div className="Stack2">
                    <h3 className={(s2Score > s1Score) ? 'winning-hand' : 'losing-hand'}>{(s2Score > s1Score) ? 'Winning Hand' : 'Losing Hand'}</h3>
                    <p className="score-card">Total experience: {s2Score}</p>
                    {stack2.map(e => <Pokecard p_id={e.id.toString()} p_name={e.name} type={e.type} base_experience={e.base_experience} />)}
                </div>
            </div>
        );
    }
}

export default Pokegame;