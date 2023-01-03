import { baseUrl, maxItems } from '../variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${maxItems}`)
    return await response.json()
}

export { getRepositories }