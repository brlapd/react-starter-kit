import { post, get, postFormData } from "./request"

export const getUsers = () => get('/users')
export const getUserDetail = id => get('/users/' + id)
export const newUser = data => post('/users', data)



