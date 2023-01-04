import { propTypes } from "react-bootstrap/esm/Image"
import classNames from "classnames"

function Button({ children, variant = "default" }) {
    return (
        <button className={classNames({
            "p-4 h-10 flex items-center rounded": true,
            "bg-gray-100": variant == "default",
            "bg-green-600 text-white": variant == "success",
            "bg-yellow-100": variant == "warning",
            "bg-red-600 text-white": variant == "danger",
            "bg-blue-300 text-yellow-800": variant == "info"
        })}>{children} {variant}</button>
    )
}

export default Button