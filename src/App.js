import { useEffect } from "react"
import { PostService } from "./services"
import { UserService } from "./services"

function App() {

    useEffect(() => {
        PostService.getPosts().then(res => console.log(res))
        PostService.getPostDetail(2).then(res => console.log(res))
        PostService.newPost({
            userId: 3,
            title: 'test',
            body: 'test'
        }).then(res => console.log(res))

        UserService.getUserDetail(2).then(res => console.log(res))

    }, [])

    return (
        <>
            app
        </>
    )
}

export default App