import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('DIV');
    ReactDOM.render(<App />, div);

    expect(div.textContent).toContain('Hello World');

    ReactDOM.unmountComponentAtNode(div);
})