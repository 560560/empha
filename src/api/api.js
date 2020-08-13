import * as axios from "axios";

let authInstance = axios.create({
    baseURL: "http://emphasoft-test-assignment.herokuapp.com/"

})

let usersInstance = axios.create({
    baseURL: "http://emphasoft-test-assignment.herokuapp.com/"
})

export const authApi = {
    login(username, password) {
        return authInstance.post("api-token-auth/", {username, password})
    }
}

export const usersApi = {
    getUsers(token) {
        return usersInstance.get("/api/v1/users/", {headers: {"Authorization": `Token ${token}`}})
    }
}