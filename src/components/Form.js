import React from 'react'



function Form(props) {

    return (
        <form onSubmit={props.handleFormSubmit} action="">
            <select onChange={props.handleSelect} name="" id="">
                <option value=""></option>
                <option value="sum">Sum</option>
                <option value="average">Average</option>
                <option value="mode">Mode</option>
            </select>
            <button onClick={props.handleCalculate} type='submit'>Calculate</button>
        </form>
    )
}


export default Form