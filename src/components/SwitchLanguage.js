import { useContext } from "react"
import SiteContext, { Context } from "../context/SiteContext"

function SwitchLanguage() {

    const { language, setLanguage } = useContext(Context);

    return (
        <>
            Mevcut dil = {language} <br />
            <button onClick={() => setLanguage(language == 'tr' ? 'en' : 'tr')}>Dili değiştir</button>
        </>
    )
}

export default SwitchLanguage