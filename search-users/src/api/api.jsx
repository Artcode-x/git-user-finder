import axios from 'axios'

const way = 'https://api.github.com'

export default async function searchQuerryGetUsers({ userName, filter, page }) {
    const order = `&order=${filter ? 'desc' : 'asc'}`

    const response = await axios(
        `${way}/search/users?q=${userName}&sort=repositories${order}&per_page=8&page=${page}`,
        {
            method: 'GET',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        }
    )

    return response.data
}
