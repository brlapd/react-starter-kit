import SwitchLanguage from "./SwitchLanguage"
import SwitchTheme from "./SwitchTheme"
import { useAuth } from "../context"

function ContextHeader() {

    const { user, dispatch } = useAuth();

    const login = () => {
        dispatch({
            type: 'LOGIN',
            payload: {
                name: 'Birol',
                id: 1
            }
        })
        /*
        setUser({
            name: 'Birol',
            id: 1
        })
        */
    }

    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        })
        //setUser(false)
    }

    return (
        <header>
            <div>Merhaba {user.name}</div>
            {user && <button onClick={logout}>Çıkış yap</button> || <button onClick={login}>Giriş Yap</button>}
            <br />
            <SwitchTheme />
            <br />
            <SwitchLanguage />
        </header>
    )
}

export default ContextHeader