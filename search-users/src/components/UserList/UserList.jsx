import React from 'react'
import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import * as S from './UserList.styled'
import { searchUsersSelector } from '../../store/toolkitSelectors'

export default function UserList() {
    //  const navigate = useNavigate()
    const userList = useSelector(searchUsersSelector)
    console.log(userList)
    const clickToUser = (userLogin) => {
        console.log(userLogin)
        //    navigate(`userList/${userLogin}`)
    }
    return (
        <S.Parent>
            {userList.length > 0 ? (
                <S.UserListBlock>
                    {userList?.map((user) => (
                        <S.UserInfo
                            key={user.id}
                            onClick={() => clickToUser(user.login)}
                        >
                            <S.UserDivForImg>
                                <S.UserAva src={user.avatar} />
                            </S.UserDivForImg>
                            <S.UserLogin>{user.login}</S.UserLogin>
                            <S.TextUrl>{user.url}</S.TextUrl>
                            <S.GoToUser>подробнее</S.GoToUser>
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
