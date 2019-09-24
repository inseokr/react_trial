import React, {Component} from "react"

class App extends Component {
	
	counstructor() {
		super()
		this.state = {}
	}

	static getDerivedStateFromProps(props, state) {
		// return the new, updated state based upon the props.
	}

	getSnapShotBeforeUpdate() {
		// create a backup of the current way things are
	}

	// First time redering??
	componentDidMount() {

	}

	// Whenever parent passes props
	// this will go away?
	// componentWillReceiveProps(nextProps) {
		// if (nexProps.whaterver != this.props.whaterver) {
			// do something important here
		// }
	// }

	shouldComponentUpdate(nextProps, nextState) {
		// return true if want it to update
		// return false if not .
		// It's used to optimize the performance.
	}

	componentWillUnmout() {
		// remove event listner
		// teardown or cleanup your code before your compents disappea

	}

	render() {
		return (
			<div>
				Code goes here
			</div>
		)
	}
}
