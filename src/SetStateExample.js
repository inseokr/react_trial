import React from "react"

class SetStateExample extends React.Component {
	constructor() {
		super()
		this.state = {
			count: 0
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {

		// count won't be updated by this only.
		// we should call setState always?
		this.state.count = this.state.count + 1

		// Do we really need to use prevState??
		// BTW the state will be updated only if it's rendered!!
		this.setState( () => {
				return {
					// count should be the member variable?
					count: this.state.count
				}
		})


		//this.state.count = this.state.count + 1
		//this.setState(prevState => {
		//	return {
		//		count: prevState.count + 1
		//	}
		//})
	}

	render() {
		return(
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.handleClick}> Change!</button>
			</div>
		)
	}
}

export default SetStateExample