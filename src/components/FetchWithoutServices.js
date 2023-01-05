import { useEffect, useState } from "react"

function FetchWithoutServices() {

    const [name, setName] = useState('Birol');
    const [avatar, setAvatar] = useState(false);

    const [users, setUsers] = useState(false);

    const headers = new Headers();
    //headers.append("Content-type", "application/json")
    headers.append("Authorization", "Bearer 15656564564564564")

    const addPost = data => {

        const formData = new FormData();
        formData.append('userId', data.userId);
        formData.append('title', data.title);
        formData.append('body', data.body);

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            //body: JSON.stringify(data),
            body: formData,
            headers: headers
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                if (res.ok && res.status == 200) {
                    return res.json();
                }
            })
            .then(data => setUsers(data))
            .catch(err => console.log(err));


        addPost({
            userId: 1,
            title: 'Post title 255',
            body: 'Post detail 255'
        })

    }, [])

    const submitHandle = e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("avatar", avatar);

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

        console.log("submit edildi");
    }

    return (
        <>
            <form onSubmit={submitHandle}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} /><br />
                <input type="file" onChange={e => setAvatar(e.target.files[0])} /><br />
                <button type="submit" disabled={!name || !avatar}>Kaydet</button>
            </form>
            <h1>User List</h1>
            <ul>
                {users && users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default FetchWithoutServices