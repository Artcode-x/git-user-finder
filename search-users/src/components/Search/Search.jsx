import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchQuerryGetUsers from '../../api/api'
import {
    saveSearchUser,
    updTextInInputSearch,
    updateTotalPagesCount,
} from '../../store/reducersSlice'

import * as S from './Search.styled'
import { filterSelector } from '../../store/toolkitSelectors'

export default function Search() {
    const filter = useSelector(filterSelector)

    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [match, setMatch] = useState(null)
    const [showError, setShowError] = useState(null)

    const page = 1

    const searchClick = async () => {
        try {
            setDisabled(true)

            const response = await searchQuerryGetUsers({
                userName,
                filter,
                page,
            })
            setMatch(response.total_count)

            const PageforShow = 8
            //  кол-во выводимых страниц на главной по 8 юзеров
            const resultAllPages = Math.ceil(response.total_count / PageforShow)

            dispatch(updateTotalPagesCount(resultAllPages))
            console.log(response)
            const users = response.items.map((user) => ({
                login: user.login,
                avatar: user.avatar_url,
                url: user.url,
                id: user.id,
                link: user.html_url,
            }))

            dispatch(saveSearchUser(users))
            dispatch(updTextInInputSearch(userName))
        } catch (error) {
            console.log(error.response)
            if (error.response.status === 403) {
                setShowError(
                    'Превышено количество запросов, повторите позднее!'
                )
            } else if (error.response.status === 422) {
                setShowError('Ошибка на сервере, повторите позднее!')
            } else if (error.response.status === 503) {
                setShowError('Сервер не доступен, повторите позднее!')
            }
        } finally {
            setDisabled(false)
        }
    }

    const checkEnter = (e) => {
        if (e.key === 'Enter') {
            searchClick()
        }
    }

    useEffect(() => {
        if (!userName) return
        searchClick()
    }, [filter])

    return (
        <S.SearchContainer>
            <S.TitleH3>Github Search Users</S.TitleH3>
            <S.SearchBlock>
                <S.SearchInput
                    type="search"
                    placeholder="Поиск"
                    onKeyDown={(e) => checkEnter(e)}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                />
                <S.SearchButton disabled={disabled} onClick={searchClick}>
                    {disabled ? 'идет поиск...' : 'Поиск'}
                </S.SearchButton>
            </S.SearchBlock>
            <S.AllResults>Всего найдено результатов: {match}</S.AllResults>
            {showError && <S.ForErrors>{showError}</S.ForErrors>}
        </S.SearchContainer>
    )
}
