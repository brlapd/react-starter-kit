import { memo } from "react";

function TodoItem({ todo }) {
    console.log("TodoItem rendered = " + todo);
    return (
        <li>
            {todo}
        </li>
    )
}

export default memo(TodoItem)