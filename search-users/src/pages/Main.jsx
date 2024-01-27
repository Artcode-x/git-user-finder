import React from 'react'

import * as S from './Main.styled'
import Search from '../components/Search/Search'
import UserList from '../components/UserList/UserList'
import Filter from '../components/Filter-repo/filter'

function Main() {
    // const [loading, setLoading] = useState(null)

    // const UsersList = ({ users }) => {
    //     return (
    //       <ul>
    //         {users.map((user) => (
    //           <li key={user.id}>{user.login}</li>
    //         ))}
    //       </ul>
    //     );
    //   };

    return (
        <S.GeneralBlock>
            <Search />
            <Filter />
            <UserList />
        </S.GeneralBlock>
    )
}
export default Main
