export const getUsersSelector = (state) => {
    let sortingField = state.usersPage.sortingBy
    if (state.usersPage.usernameSearchSelector && state.usersPage.users) {
        return [...state.usersPage.users]
            .filter(user => user.username.toLowerCase().includes(state.usersPage.usernameSearchSelector))
            .sort((prev, next) => {
                if (state.usersPage.sortingFlow === "increase") return prev[sortingField] - next[sortingField]
                else return next[sortingField] - prev[sortingField]
            })
    } else if (state.usersPage.users) {
        return [...state.usersPage.users]
            .sort((prev, next) => {
                if (state.usersPage.sortingFlow === "increase") return prev[sortingField] - next[sortingField]
                else return next[sortingField] - prev[sortingField]
            })
    }
}
