import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './UserList.styled'
import { searchUsersSelector } from '../../store/toolkitSelectors'
import { setFlag, setUser } from '../../store/reducersSlice'
import { getUserInfo } from '../../api/api'

export default function UserList() {
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState(false)

    const userList = useSelector(searchUsersSelector)

    const clickToUser = async (user, index) => {
        console.log(index)
        try {
            setDisabled(true)
            const response = await getUserInfo(user.login)
            dispatch(setUser(response))
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setFlag(true))
            setDisabled(false)
        }
    }
    return (
        <S.Parent>
            {userList.length > 0 ? (
                <S.UserListBlock>
                    {userList.map((user, index) => (
                        <S.UserInfo key={user.id}>
                            <S.UserDivForImg>
                                <S.UserAva src={user.avatar} />
                            </S.UserDivForImg>
                            <S.UserLogin>{user.login}</S.UserLogin>
                            <S.TextUrl>{user.url}</S.TextUrl>
                            <S.GoToUser
                                disabled={disabled}
                                onClick={() => clickToUser(user, index)}
                            >
                                {disabled ? 'Загружаю...' : 'Подробнее'}
                            </S.GoToUser>
                        </S.UserInfo>
                    ))}
                </S.UserListBlock>
            ) : (
                <S.UserText>
                    Введите пользователя которого хотите найти!
                </S.UserText>
            )}
        </S.Parent>
    )
}
