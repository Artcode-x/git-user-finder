const mainSelector = (store) => store.store

export default mainSelector

export const searchSelector = (store) => mainSelector(store).search
export const searchUsersSelector = (store) => mainSelector(store).searchUserName
