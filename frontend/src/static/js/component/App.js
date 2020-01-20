import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {data: 'test data 1', check: true}
        // testClick 함수 내에서 this를 사용하기 위해서 this 를 바인딩 시켜준다.
        // this.testClick = this.testClick.bind(this);
    }

    componentDidMount() {
        console.log(this.state.data)
        // 직접적으로 state 값을 변경하지 안는다.
        this.setState({data: 'test data 2'})
    }

    // test click event 
    testClick(value) {
        console.log(this, value);
        this.setState({data: 'test data 3', check: false})
    }

    render() {
        const check_value = this.state.check
        let select_input;
        if (check_value) {
            select_input = <input placeholder='TEST INPUT1'/>
        } else {
            select_input = <input placeholder='TEST INPUT2'/>
        }
        // onClick = {(e) => this.testClick(e)} 직접 함수를 넘겨줄수 있지만 렌더링될 때마다 다른 콜백이 생성 되기때문에 
        // this.testClick = this.testClick.bind(this); 을 권장한다.
        return (
            <div onClick={this.testClick.bind(this, 'test this')}>
                Hello React-Router {this.props.name} {this.state.data}
                {select_input}
            </div>
        );
    }
}

export default App;