import { memo } from "react"

function Header() {
    console.log("header rendered")
    return (
        <div>header</div>
    )
}

export default memo(Header)