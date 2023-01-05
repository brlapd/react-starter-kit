import { Routes, Route, Link, NavLink } from "react-router-dom"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import BlogLayout from "./pages/blog"
import Categories from "./pages/blog/Categories"
import Post from "./pages/blog/Post"
import Blog from "./pages/blog/Blog"
import Page404 from "./pages/Page404"
import Blog404 from "./pages/blog/Blog404"

function App() {
    return (
        <>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive && 'aktif'}>Anasayfa</NavLink>
                <NavLink to="/contact" style={(isActive) => ({
                    backgroundColor: isActive ? 'purple' : 'transparent',
                    color: isActive ? 'white' : 'black'
                })}>İletişim</NavLink>
                <NavLink to="/blog">
                    {({ isActive }) => (
                        <>
                            Blog
                            {isActive && '(Active)'}
                        </>
                    )}
                </NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<BlogLayout />}>
                    <Route index={true} element={<Blog />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="post/:url" element={<Post />} />
                    <Route path="*" element={<Blog404 />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    )
}

export default App