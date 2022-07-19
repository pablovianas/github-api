import { getUser } from './services/user.js'
import { getRepositories } from './services/repositories.js'
import { getEvents } from './services/events.js'
import { user } from './objects/user.js'
import { screen } from './objects/screen.js';

document.getElementById('form').addEventListener('submit', (e) =>{
    e.preventDefault()
    const userName = document.getElementById('input-search').value;

    if (userName === ''){
        alert('Preencha o campo com o nome do usuário do GitHub')
        return
    }
    getUserData(userName)
})

async function getUserData(userName){
    const userResponse = await getUser(userName)

    if (userResponse.message === "Not Found"){
        screen.renderUserNotFound(userName) 
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)

    user.setInfo(userResponse)
    user.setRepository(repositoriesResponse)
    user.setEvents(eventsResponse)
    screen.renderUser(user)

}
