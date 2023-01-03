import { baseUrl, maxItems } from '../variables.js'

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${maxItems}`)
    return await response.json()
}

export { getEvents }