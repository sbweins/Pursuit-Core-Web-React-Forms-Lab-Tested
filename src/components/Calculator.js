import React from 'react';
import './Calculator.css'
import Input from './Input'
import Form from './Form'
import Result from './Result'


class Calculator extends React.Component {

    constructor() {
        super()

        this.state = {
            input: '',
            method: '',
            result: ''
        }
        // this.result = 0      // I went with 'result' in state, since I need the page to re-render in order for the result to show up on the page
    }
    
    handleFormSubmit = (e) => {
        e.preventDefault()
    }
    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    handleSelect = (e) => {
        this.setState({
            method: e.target.value
        })
    }
    handleCalculate = () => {
        const {input, method, result} = this.state
        const array = input.split(',')
        let sum = 0
        let average = 0
        let mode = 0


            if (method === 'sum') {
                for (let item of array) {
                    let num = parseInt(item)
                    sum = sum + num
                }
                this.setState({
                    result: sum
                })
            }
            else if (method === 'average') {
                for (let item of array) {
                    let num = parseInt(item)
                    sum = sum + num
                }
                average = sum / array.length
                this.setState({
                    result: average
                })
            }
            else if (method === 'mode') {
                let newArr = []
                let obj = {}
                array.forEach((item) => {
                    parseInt(item)
                    newArr.push(item)
                })
                newArr.forEach((num) => {
                    obj[num] = 0
                })
                newArr.forEach((num) => {
                    obj[num]++
                })
                let mostCommonNumVal = 0
                newArr.forEach((num) => {
                    console.log(obj[num])
                    if (mostCommonNumVal < obj[num]) {
                        mostCommonNumVal = obj[num]
                        mode = num
                    }
                })
                this.setState({
                    result: mode
                })
            }

        for (let item of array) {
            parseInt(item)
            if (isNaN(item) === true || item === '') {
                this.setState({
                    result: 'Invalid input.'
                })
            }
        }

        console.log(array)
        console.log(result)
    }


    render() {
        const {input, method, result} = this.state

        return (
            <div>
                <Input input={input} handleInput={this.handleInput} />
                <Form 
                    handleFormSubmit={this.handleFormSubmit} 
                    handleCalculate={this.handleCalculate} 
                    handleSelect={this.handleSelect}
                    method={method} />
                <Result result={result}/>
            </div>
        )

    }













    // render() { 
    //     const {input, method, result} = this.state
                
    //     return (
    //         <div>
    //             <form onSubmit={this.handleFormSubmit} action="">
    //                 <input onInput={this.handleInput} type="text"></input>
    //                 <select onChange={this.handleSelect} name="operation" id="operation">
    //                     <option value=""></option>
    //                     <option value="sum">sum</option>
    //                     <option value="average">average</option>
    //                     <option value="mode">mode</option>
    //                 </select>
    //                 <button onClick={this.handleCalculate} type="submit">Calculate</button>
    //             </form>
    //             <h3>{this.state.result}</h3>
    //         </div>
    //     )
    // }
}

export default Calculator

// Build a React app containing:

// - An input where the user can enter comma-separated number values in an array
// - A select to choose between calculating the sum, the average, and the mode (most frequently occurring number)
// - A calculate button that, when pressed, puts the result of the selected operation on the input 
//   numbers on the screen.
    // If the numbers are invalid for some reason, put 'Invalid input'. (Notice the period at the end)