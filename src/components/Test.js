import { useEffect, useState } from "react";

function Test() {

    const [postId, setPostId] = useState(1);
    const [post, setPost] = useState(false);

    useEffect(() => {
        console.log("component ilk yüklendiğinde çalışır");
        return () => {
            console.log("component destroyed");
        }
    }, [])

    useEffect(() => {
        //console.log("postId değeri değişti = " + postId);

        fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
            .then(res => res.json())
            .then(data => setPost(data));



    }, [postId])

    /*
    useEffect(() => {
        console.log("component render edildi.");
    })
*/


    return (
        <div>
            <h3>{postId}</h3>
            <div>
                {post && JSON.stringify(post)}
            </div>
            <button onClick={() => setPostId(postId => postId + 1)}>Artır</button>
            Test coponent
        </div>
    )
}

export default Test;