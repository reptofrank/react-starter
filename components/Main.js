import React, { Component } from 'react';
import Section from './Section';

export default class Main extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(){
		const myInit = {
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors',
            method: 'GET'
        }

        fetch('/epossystem/web/app_dev.php/', myInit)
            .then(response => response.json())
            .then(items => {
                console.log(items)
            }
        )
	}

	render() {
		return (
			<div className="main">
				<Section />
				<Section />
			</div>
		);
	}
}
