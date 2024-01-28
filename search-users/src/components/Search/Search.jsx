import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchQuerryGetUsers from '../../api/api'
import { saveSearchUser } from '../../store/reducersSlice'

import * as S from './Search.styled'
import { filterSelector } from '../../store/toolkitSelectors'

export default function Search() {
    const filter = useSelector(filterSelector)

    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [match, setMatch] = useState(null)
    const [showError, setShowError] = useState(null)

    const searchClick = async () => {
        try {
            setDisabled(true)

            const response = await searchQuerryGetUsers({ userName, filter })
            //  console.log(response)
            setMatch(response.total_count)
            const users = response.items.map((user) => ({
                login: user.login,
                avatar: user.avatar_url,
                url: user.url,
                id: user.id,
            }))
            // console.log(users)
            dispatch(saveSearchUser(users))
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

    // useEffect(() => {}, [showError])

    return (
        <S.SearchContainer>
            <S.TitleH3>Github Search Users</S.TitleH3>
            <S.SearchBlock>
                <S.SearchInput
                    type="search"
                    placeholder="Поиск"
                    onKeyDown={(e) => checkEnter(e)}
                    // onKeyDown={() => searchClick()}
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
