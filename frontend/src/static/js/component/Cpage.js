import React, { Component } from 'react';
import Dpage from './Dpage'
class Cpage extends Component {
    constructor(props) {
        super(props)
        this.state = {list: props.list, select_value: 'text1'}
        this.selectChange = this.selectChange.bind(this)
        this.testClick = this.testClick.bind(this)
        this.inputChange = this.inputChange.bind(this)
    }

    selectChange(e) {
        this.setState({select_value: e.target.value})
    }

    inputChange(e) {
        const target_name = e.target.name
        const target_value = e.target.value
        console.log(target_name, target_value)
    }

    testClick() {
        console.log(this.state.select_value)
    }
    render() {
        return (
            <div>
                <h1 onClick={this.testClick}>Hello Cpage</h1>
                {this.state.list.map((number, index) => <div key={number.toString()}>{number}:{index}</div>)}
                <select value={this.state.select_value} onChange={this.selectChange}>
                    <option value="text1">text1</option>
                    <option value="text2">text2</option>
                    <option value="text3">text3</option>
                    <option value="text4">text4</option>
                    <option value="text5">text5</option>
                </select>
                <input name="input1" onChange={this.inputChange} value={this.state.select_value}></input>
                <input name="input2" onChange={this.inputChange}></input>
                <input name="input3" onChange={this.inputChange}></input>
                <Dpage/>
            </div>
        );
    }
}

export default Cpage;