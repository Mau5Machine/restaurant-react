import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Slider from './components/Slider';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './customJs/main.js';

ReactDOM.render(<Slider />, document.querySelector('#app'));
