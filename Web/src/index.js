import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs';
import App from './App';
//import store, { history } from './store';
import { Provider } from 'react-redux'
import { store } from './_helpers';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
         <App />
</Provider>, 
document.getElementById('root'));
//registerServiceWorker();