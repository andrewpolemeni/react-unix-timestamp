import React, { Component } from 'react';

class Epoch extends Component {

	constructor(props) {
		super(props);
		this.state = { time: this.secondsSinceEpoch() };
	}

	secondsSinceEpoch = () => {
		const now = new Date()
		return Math.round(now.getTime() / 1000);
	}

	componentDidMount() {
		this.interval = setInterval(() => this.setState({ time: this.secondsSinceEpoch() }), 100);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div>
				Unix Time: <br />
				{this.state.time}
			</div>
		);
	}
}

export default Epoch;
