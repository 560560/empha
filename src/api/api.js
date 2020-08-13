import * as axios from "axios";


let instance = axios.create({
  baseURL: "http://emphasoft-test-assignment.herokuapp.com/",
})

export const authApi= {
    login(username, password) {
        return instance.post("api-token-auth/", {username, password})
    }
}