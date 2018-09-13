import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import TeamList from './components/TeamList';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route  path='/' component={App} />
            <Route  path='/teamList' component={TeamList}/>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

registerServiceWorker();
