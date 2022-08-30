import React, { useState } from "react";
import Dice from "./Dice";
import "../css/RollingDiceStyle.css";

export default function RollingDice({faces}){
    const [state, setState] = useState({
        dice: 'one',
        rolling: false
    })

    const { dice, rolling } = state;


    const isRolling = () => {       
        const diceRolling = faces[Math.floor(Math.random() * 6 )] // - com +1 objeto retorna undefined depois de alguns cliques
        //const diceRolling = faces[Math.floor(0.5 - Math.random())] - retorna undefined
        //const diceRolling = faces[Math.ceil(Math.random() * 6 )]  - números repetidos com mais frequencia
        console.log(diceRolling)

        setState({
            dice: Object.keys(diceRolling),
            rolling: true
        })
        

        setTimeout(()=>{
            setState((prevState)=> ({...prevState,rolling: false}))
        }, 500)
    }

    return (
        <>
        <section className="roll-dice">
            <section className="roll-dice-container">
                <Dice face={dice} rolling={rolling}/>
            </section>
            <button onClick={isRolling} disabled={rolling}>
                {rolling ? "Rolling..." : "Press to Roll!"}
            </button>

        </section>
        </>
    )


}

RollingDice.defaultProps = {
    faces: [
        {one: 1},
        {two: 2},
        {three: 3},
        {four: 4},
        {five: 5},
        {six: 6},
    ],
};

