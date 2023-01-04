import logo from './logo.svg'
import styles from './App.module.css'
import { Title } from "./Components"
import Bootstrap from "./Bootstrap"
// import "./tailwind.css"
import "./style.scss"
import Tailwind from './Tailwind'

function Styles() {
    return (
        <div className={styles.App}>
            <Title>{process.env.NODE_ENV}</Title>
            <Title theme="dark">{process.env.NODE_ENV}</Title>
            <p className='env'>
                {process.env.REACT_APP_API_URL}
                <span>birol</span>
            </p>
            <Bootstrap />
            <Tailwind />
            <img src="/logo192.png" />
            <img src={logo} />
        </div>
    )
}

export default Styles