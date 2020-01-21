import React, { Component } from 'react';
import'../../css/App.css'

class App extends Component {
    constructor(props) {
        super(props);
        console.log('App : ', props.name)
        this.state = {data: 'test data 1', check: true}
        this.textInput = React.createRef() // 포커스 this.textInput.current.current.focus()
        this.focusClick = this.focusClick.bind(this)
        // testClick 함수 내에서 this를 사용하기 위해서 this 를 바인딩 시켜준다.
        // this.testClick = this.testClick.bind(this);
    }

    componentDidMount() {
        console.log(this.state.data)
        // 직접적으로 state 값을 변경하지 안는다.
        this.setState({data: 'test data 2'})
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        alert('App componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate : ', nextProps, nextState)
        return false
    }
    
    // test click event 
    testClick(value) {
        console.log(this, value);
        this.setState({data: 'test data 3', check: false})
    }

    focusClick() {
        console.log(this.textInput.current)
        this.textInput.current.focus()
    }

    render() {
        const check_value = this.state.check
        let select_input;
        if (check_value) {
            select_input = <input ref={this.textInput} onClick={this.testClick.bind(this, 'test this')} placeholder='TEST INPUT1'/>
        } else {
            select_input = <input ref={this.textInput} onClick={this.testClick.bind(this, 'test this')} placeholder='TEST INPUT2'/>
        }
        // onClick = {(e) => this.testClick(e)} 직접 함수를 넘겨줄수 있지만 렌더링될 때마다 다른 콜백이 생성 되기때문에 
        // this.testClick = this.testClick.bind(this); 을 권장한다.
        return (
            <div aria-label={this.state.data}>
                Hello React-Router {this.props.name} {this.state.data}
                {select_input}
                {check_value && <button onClick={this.focusClick}>focus</button>}
                <h1 className="app-h1">H1</h1>
                <h2 id="app-h2">h2</h2>
            </div>  
        );
    }
}

export default App;