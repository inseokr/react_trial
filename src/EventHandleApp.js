import React from "react"

function EventHandleApp() {
	return (
		<div>
			<img onMouseOver={() => console.log("hovered")} src="https://www.fillmurray.com/200/100"/>
			<br />
			<br />
			<button onClick={() => {console.log("I was clicked")}}>Click me</button>
		</div>
	)
}

export default EventHandleApp