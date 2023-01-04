import SwitchLanguage from "./SwitchLanguage"
import SwitchTheme from "./SwitchTheme"
function ContextHeader() {
    return (
        <header>
            Header<br />
            <SwitchTheme />
            <br />
            <SwitchLanguage />
        </header>
    )
}

export default ContextHeader