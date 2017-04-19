require('babel-polyfill');
require('../sass/app.scss');
import Routes   from './routes';
import ReactDOM from 'react-dom';

ReactDOM.render(Routes, document.querySelector('.common-home'));
