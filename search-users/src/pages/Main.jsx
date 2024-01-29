import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import * as S from './Main.styled'
import Search from '../components/Search/Search'
import UserList from '../components/UserList/UserList'
import Filter from '../components/Filter-repo/filter'
import Pagination from '../components/pagination/pagination'
import { flagSelector } from '../store/toolkitSelectors'
import Modal from '../components/modal/modal'
import CircleLoader from '../components/Loader/loader'

function Main() {
    const [loading, setLoading] = useState(false)

    const flagForOpenModal = useSelector(flagSelector)
    return (
        <S.GeneralBlock>
            <Search setLoading={setLoading} />
            <Filter />
            {flagForOpenModal && <Modal />}
            {loading ? <CircleLoader /> : <UserList />}
            <Pagination />
        </S.GeneralBlock>
    )
}
export default Main
