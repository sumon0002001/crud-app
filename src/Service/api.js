import axios from 'axios';

const usersUrl = 'http://localhost:3003/users';

export const getUsers = async() => {
    return await axios.get(usersUrl)
}