import React from "react"

function TodoItem(props) {
	return (
		<div className="todo-item">
			<div class = "row">
				<div class="col-sm">
					<input
						type="checkbox"
						checked={props.item.completed}
						onChange={() => props.handleChange(props.item.id)}
					/>
				</div>
				<div class="col-sm">
					<p>{props.item.text}</p>
				</div>
			</div>

		</div>
	)
}

export default TodoItem