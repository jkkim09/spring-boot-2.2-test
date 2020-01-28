import React from 'react';
import ReactDOM from 'react-dom';
import RouterPage from './static/js/RouterPage';
import reducer from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <RouterPage />
</Provider>
, document.getElementById('app'))
