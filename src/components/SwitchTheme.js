import { useSite } from "../context"

function SwitchTheme() {

    const { theme, dispatch } = useSite();

    const switchTheme = () => {
        dispatch({
            type: 'TOGGLE_THEME'
        })
    }

    return (
        <>
            Mevcut tema = {theme} <br />
            <button onClick={switchTheme}>Temayı değiştir</button>
        </>
    )
}

export default SwitchTheme