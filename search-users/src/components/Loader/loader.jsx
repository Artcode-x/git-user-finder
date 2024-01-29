import React from 'react'
import * as S from './loader.styled'

function CircleLoader() {
    return (
        <S.LoaderContainer>
            <S.OuterCircle />
            <S.InnerCircle />
        </S.LoaderContainer>
    )
}

export default CircleLoader
