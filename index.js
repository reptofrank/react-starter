import React from 'react';
import ReactDom from 'react-dom';
import Main from './components/Main.js';

// const el = React.createElement('h2', null, 'Lift History', React.createElement('span', null, '❤️'));
// const el = <h2>Lifting Stuff</h2>;

ReactDom.render(<Main />, document.getElementById('root'));