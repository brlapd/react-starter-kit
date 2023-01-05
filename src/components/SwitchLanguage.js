
import { useSite } from "../context"

function SwitchLanguage() {

    const { language, dispatch } = useSite();

    const switchLanguage = () => {
        dispatch({
            type: 'TOGGLE_LANGUAGE'
        })
    }

    return (
        <>
            Mevcut dil = {language} <br />
            <button onClick={switchLanguage}>Dili değiştir</button>
        </>
    )
}

export default SwitchLanguage