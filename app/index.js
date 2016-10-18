const React = require('react');
const ReactDOM = require('react-dom');

require('./styles.scss');
var App = require('./components/App.jsx')

ReactDOM.render(<App source='https://weatherly-api.herokuapp.com/api/weather/' />, document.getElementById('application'))
