import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import searchQuerryGetUsers from '../../api/api'
import { saveSearchUser } from '../../store/reducersSlice'

import * as S from './Search.styled'

export default function Search() {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [match, setMatch] = useState(null)
    const searchClick = async () => {
        try {
            setDisabled(true)
            //   dispatch(saveSearchUser(userName))
            const response = await searchQuerryGetUsers({ userName })
            console.log(response)
            setMatch(response.total_count)
            const users = response.items.map((user) => ({
                login: user.login,
                avatar: user.avatar_url,
                url: user.url,
            }))
            console.log(users)
            dispatch(saveSearchUser(users))
        } catch (error) {
            console.log(error.message)
        } finally {
            setDisabled(false)
        }
    }

    return (
        <S.SearchContainer>
            <S.TitleH3>Github Search Users</S.TitleH3>
            <S.SearchBlock>
                <S.SearchInput
                    type="search"
                    placeholder="Поиск"
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                />
                <S.SearchButton disabled={disabled} onClick={searchClick}>
                    {disabled ? 'идет поиск...' : 'Поиск'}
                </S.SearchButton>
            </S.SearchBlock>
            <S.AllResults>Всего найден результатов: {match}</S.AllResults>
        </S.SearchContainer>
    )
}
