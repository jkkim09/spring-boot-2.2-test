import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { increment, decrement, setDiff  } from '../../actions';
import Header from './component/Header';
import App from './component/App';
import Apage from './component/Apage';
import Bpage from './component/Bpage';
import Epage from './component/Epage';
const Cpage = React.lazy(() => import('./component/Cpage'));

class RouterPage extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        console.log('onClick : ', this.props);
        this.props.testClick('test value');
    }

    render() {
        console.log('this.props : ', this.props);
        const list = [1,2,3,4,5,6,7]
        return (
            // exaxt 가 없으면 순차적으로 rendering 된다.
            // HashRouter
            <div>
                <HashRouter>
                    <Header/>
                    <h1 onClick={this.onClick}>test</h1>
                    <Route exact path="/" component={() => <App name="testName"/>}/>
                    <Route path="/a"  component={() =>  <Apage name="testName"/>} />
                    <Route path="/b"  component={() => <Bpage/>} />
                    <Route path="/e"  component={() => <Epage/>} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route path="/c" component={() => <Cpage list={list}/>} />
                    </Suspense>
                </HashRouter>
            </div>
            // <BrowserRouter>
            //     <Suspense fallback={<div>Loading...</div>}>
            //         <App name="testName"/>
            //         <Apage name="testName"/>
            //         <Bpage/>
            //         <Cpage list={list}/>
            //     </Suspense>
            // </BrowserRouter>
        );
    }
}


// this.props 에 state 등록
let mapStateToProps = (state) => {
    console.log('redux state : ', state);
    return {
        value1: 'testValue',
        value2: state.extra.value
    };
}

// this.props 에 state 등록
const todolistDispatchToProps = (dispatch) => {  
    console.log('redux dispatch : ',dispatch);
    return {
        testClick(data){
            console.log('test click : ', data, setDiff);
            dispatch(setDiff(data))
        }
    }
}

/**
 * connect(A, B)
 * A: state,
 * B: dispatch
 */
RouterPage = connect(mapStateToProps, todolistDispatchToProps)(RouterPage);

export default RouterPage;