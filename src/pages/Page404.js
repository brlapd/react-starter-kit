import { Link } from "react-router-dom"

export default function Page404() {
    return (
        <>
            <h1>Sayfa Bulunamadı</h1>
            <Link to="/">Anasayfaya git</Link>
        </>
    )
}