import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {AppContainer} from './components/app';
import './styles/index.css';

window.addEventListener('load', () =>
    ReactDOM.render(
        <AppContainer/>,
        document.getElementById('app')
    )
);