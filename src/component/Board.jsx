import React from 'react';
import Square from './Cell';


const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

export default function Board( { squases, onClick } ) {
    return (
        <div style={style}>
            {squases.map((square, i) => {
                return <Square value={square} key={i} onClick={() => onClick(i)} />
            })}
        </div>
    )
}
