import React from 'react'

function Botao(props) {
    return (
        <button onClick={() => props.click(props.valor)}> {props.valor} </button>
    )
}

export default Botao;