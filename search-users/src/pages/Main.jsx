import React from 'react'
import * as S from './Main.styled'
import Search from '../components/Search/Search'
import UserList from '../components/UserList/UserList'
import Filter from '../components/Filter-repo/filter'

function Main() {
    return (
        <S.GeneralBlock>
            <Search />
            <Filter />
            <UserList />
        </S.GeneralBlock>
    )
}
export default Main
