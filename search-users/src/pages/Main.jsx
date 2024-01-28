import React from 'react'
import * as S from './Main.styled'
import Search from '../components/Search/Search'
import UserList from '../components/UserList/UserList'
import Filter from '../components/Filter-repo/filter'
import Pagination from '../components/pagination/pagination'

function Main() {
    return (
        <S.GeneralBlock>
            <Search />
            <Filter />
            <UserList />
            <Pagination />
        </S.GeneralBlock>
    )
}
export default Main
