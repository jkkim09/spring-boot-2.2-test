import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './component/Header';
import App from './component/App';
import Apage from './component/Apage';
import Bpage from './component/Bpage';
// import Cpage from './component/Cpage';
const Cpage = React.lazy(() => import('./component/Cpage'));

class RouterPage extends Component {
    render() {
        const list = [1,2,3,4,5,6,7]
        return (
            // exaxt 가 없으면 순차적으로 rendering 된다.
            <div>
                <Router>
                    <Header/>
                    <Route exact path="/" component={() => <App name="testName"/>}/>
                    <Route path="/a"  component={() =>  <Apage name="testName"/>} />
                    <Route path="/b"  component={() => <Bpage/>} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route path="/c" component={() => <Cpage list={list}/>} />
                    </Suspense>
                </Router>
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

let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
}
RouterPage = connect(mapStateToProps)(RouterPage);

export default RouterPage;