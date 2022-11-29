const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="user profile picture"/>
                                            <div class="data">
                                                <h1>${user.name ?? "Não possui nome cadastrado"}</h1>
                                                <p>${user.bio ?? "Não possui bio cadastrada"}</p>  
                                            </div>
                                        </div>          
                                        <div class="followers section">
                                            <h2> Followers </h2>
                                            <ul>
                                                <li> <a href="${user.followersUrl}" target="_blank">${user.followers}</a>followers</li>
                                                <li> <a href="${user.followingUrl}" target="_blank">${user.following}</a>following</li>
                                            </ul>
                                        </div>
                                    `
        this.renderRepositories(user.repositories)
        this.renderEvents(user.events)
    },
    renderRepositories(repositories){
        let repositoriesItems = ''
        repositories.forEach((repo) => {
            repositoriesItems += `<li> <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                    <ul class="repositories-infos">
                                        <li><i class="fa-solid fa-code-fork"></i> ${repo.forks_count}</li>
                                        <li><i class="fa-solid fa-star"></i> ${repo.stargazers_count} </li>
                                        <li><i class="fa-solid fa-eye"></i> ${repo.watchers_count} </li>
                                        <li><i class="fa-solid fa-code"></i> ${repo.language ?? 'Sem linguagem'} </li>
                                    </ul>
                                </li>
                                `
        })

        if (repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul> ${repositoriesItems}</ul>
                                            </div>`
        }
    },
    renderEvents(events){
        let eventsItems = ''

        events.forEach((event) => {
            const isEventTypeCreateOrPush = event.type === 'CreateEvent' || event.type === 'PushEvent'
            if (isEventTypeCreateOrPush) {
                event.payload.commits.filter(commit => {
                    eventsItems += `<li> <span> ${event.repo.name} </span> - ${commit.message}</li>`
                })
            }
        })

        if (events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul> ${eventsItems}</ul>
                                            </div>`
        }
    },
    renderUserNotFound(){
        this.userProfile.innerHTML = "<h3> Usuário não encontrado </h3>"
    }
}

export { screen }