import React, {useState} from "react";
import styled from "styled-components";

const Input = () => {
    const [state, setState] = useState({
        num1: Math.ceil(Math.random() * 10),
        num2: Math.ceil(Math.random() * 40),
        response: "",
        score: 0,
        message: "",
    });

    const inputKeyPress = (event) => {
        if (event.key === "Enter") {
            const answer = parseInt(state.response)
            console.log(answer);
            if (state.num1 + state.num2 === answer) {
                setState({
                    ...state,
                    num1: Math.ceil(Math.random() * 10),
                    num2: Math.ceil(Math.random() * 30),
                    response: "",
                    score: state.score + 1,
                    message: "Correct!",
                })
            } else {
                setState({
                    ...state,
                    response: "",
                    score: state.score - 1,
                    message: "Wrong, try again",
                })
            }
        }
    }

    const updateResponse = (event) => {
        setState({
            ...state,
            response: event.target.value
        })
    }

    if (state.score === 10) {
        return (
            <Winner>
                You won!
            </Winner>
        )
    }
    
    return (
        <Design>
            <Letter>{state.num1} + {state.num2}</Letter>
            <Inputstyle autoFocus={true} onKeyPress={inputKeyPress} onChange={updateResponse} value={state.response} placeholder="Answer" />
            <h2>Score: {state.score}</h2>
            <h2>{state.message}</h2>
        </Design>
    );
}

const Winner = styled.div`
    font-size: 72px;
    color: green;
`

const Design = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    line-height: 30px;
    height: 200px;
`

const Letter = styled.label`
    font-size: 25px;
    margin-bottom: 20px;
`

const Inputstyle = styled.input`
    background-color: #035397;
    color: #FFF;
    font-size: 20px;
    border: none;
    height: 25px;
    padding: 5px 20px;
    border-radius: 5px;
    outline: none;
`

export default Input;