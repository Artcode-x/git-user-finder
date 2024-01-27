import axios from 'axios'

const way = 'https://api.github.com'

export default async function searchQuerryGetUsers({ userName }) {
    const response = await axios(`${way}/search/users?q=${userName}`, {
        method: 'GET',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    })
    return response.data
}
