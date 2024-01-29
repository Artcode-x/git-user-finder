import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './pagination.styled'
import {
    InputSearchSelector,
    filterSelector,
    pageNumberSelector,
    totalPagesFoundSelector,
} from '../../store/toolkitSelectors'
import searchQuerryGetUsers from '../../api/api'
import { saveSearchUser, setPageNumber } from '../../store/reducersSlice'

export default function Pagination() {
    const dispatch = useDispatch()

    const userName = useSelector(InputSearchSelector)
    const filter = useSelector(filterSelector)
    const currentPage = useSelector(pageNumberSelector)
    const AllPagesCount = useSelector(totalPagesFoundSelector)

    const [disabled, setDisabled] = useState(false)
    const [showError, setShowError] = useState(null)

    const sendRequestToApi = async (newCurrentPage) => {
        try {
            setDisabled(true)
            const response = await searchQuerryGetUsers({
                userName,
                filter,
                page: newCurrentPage,
            })

            const users = response.items.map((user) => ({
                login: user.login,
                avatar: user.avatar_url,
                url: user.url,
                id: user.id,
            }))

            dispatch(saveSearchUser(users))
        } catch (error) {
            if (error.response.status === 403) {
                setShowError('Слишком много запросов, повторите позднее!')
            } else if (error.response.status === 422) {
                setShowError('Ошибка на сервере, повторите позднее!')
            } else if (error.response.status === 503) {
                setShowError('Сервер устал, повторите позднее!')
            }
        } finally {
            setDisabled(false)
        }
    }

    const prev = () => {
        if (currentPage > 1) {
            const newCurrentPage = currentPage - 1
            dispatch(setPageNumber(newCurrentPage))
            sendRequestToApi(newCurrentPage)
        }
    }

    const next = () => {
        if (currentPage < AllPagesCount) {
            const newCurrentPage = currentPage + 1
            dispatch(setPageNumber(newCurrentPage))
            sendRequestToApi(newCurrentPage)
        }
    }
    return (
        <>
            <S.PagesContainer>
                <S.BtnPrev disabled={disabled} type="button" onClick={prev}>
                    Назад
                </S.BtnPrev>

                <S.CurrentNumberPageDiv>{currentPage}</S.CurrentNumberPageDiv>
                <S.BtnNext disabled={disabled} type="button" onClick={next}>
                    Вперед
                </S.BtnNext>
            </S.PagesContainer>
            {showError && <S.ForErrors>{showError}</S.ForErrors>}
        </>
    )
}
