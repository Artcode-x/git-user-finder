import React from 'react'
import * as S from './filter.styled'

export default function Filter() {
    return (
        <S.Sort>
            <S.TitleH3>Сортировать по количеству репозиториев:</S.TitleH3>
            <S.ButtonContainer>
                <S.ButtonFilter>По возрастанию</S.ButtonFilter>
                <S.ButtonFilter>По убыванию</S.ButtonFilter>
            </S.ButtonContainer>
        </S.Sort>
    )
}
