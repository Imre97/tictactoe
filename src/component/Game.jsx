import React, { useState } from 'react'
import Board from './Board'
import {calculateWinner, checkDraw} from './Helper'

const styles = {
    margin: '1rem auto',
    width: '220px',
    padding: '.5rem 1rem',
    display: 'flex',
    aligItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '30px',
    fontWeight: '800'
}

export default function Game() {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)
    const draw = checkDraw(board)


    const handleClick = (i) => {
        if (winner) return
        const boardCopy = [...board]

        if (winner || draw || boardCopy[i]) return

        boardCopy[i] = xIsNext ? 'X' : 'O'


        setBoard(boardCopy)


        setXIsNext(!xIsNext)
    }


    return (
        <>
            <div style={{margin: '1rem 0'}}>
                <Board squases={board}  onClick={handleClick} />
            </div>
            <div style={styles}>
                <p>
                    {winner ?  'winner: ' + winner
                    :draw ? 'Draw' 
                    : 'Next player: ' + (xIsNext ? 'X' : 'O')}
                </p>
                <button style={{padding: '.5rem .75rem', background: 'lightblue', border: 'none', cursor: 'pointer', outline: 'none'}} onClick={() => {
                    setBoard(Array(9).fill(null))
                    setXIsNext(true)
                }}>Start Game</button>
            </div>
        </>
    )
}
