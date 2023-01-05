import { Link } from "react-router-dom"

export default function Blog404() {
    return (
        <>
            <h1>Blog Sayfa Bulunamadı</h1>
            <Link to="/blog">Bloga dön</Link>
        </>
    )
}