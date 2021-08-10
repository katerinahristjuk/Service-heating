import axios from 'axios';

const URL = 'http://localhost:7000/service-heating/api/v1';

export const getUsers = () => axios.get(`${URL}/users`);
export const register = (newUser) => axios.post(`${URL}/register`, newUser);
export const login = (user) => axios.post(`${URL}/login`, user);
export const updateUser = (id, user) => axios.patch(`${URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${URL}/${id}`);
