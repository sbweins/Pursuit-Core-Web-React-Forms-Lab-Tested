import React from 'react'



function Input(props) {


    return (
        <div>
            <input onInput={props.handleInput} type="text" name="" id="" value={props.input}/>
        </div>
    )
}

export default Input