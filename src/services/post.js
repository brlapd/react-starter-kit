import { post, get, postFormData } from "./request"

export const getPosts = () => get('/posts')
export const getPostDetail = id => get('/posts/' + id)
export const newPost = data => post('/posts', data)

