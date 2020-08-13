export const getUsersSelector = (state) => {
    if (state.usersPage.usernameSearchSelector && state.usersPage.users) {
        return state.usersPage.users.filter(user => user.username.toLowerCase().includes(state.usersPage.usernameSearchSelector))
    } else
        return state.usersPage.users
}
