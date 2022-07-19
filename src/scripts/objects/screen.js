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

        
        
        let repositoriesItems = ''
        user.repositories.forEach((repo) => {
            repositoriesItems += `<li> <a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        })

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul> ${repositoriesItems}</ul>
                                            </div>`     
        }

        let eventsItems = ''

        user.events.forEach((event)=> {
            const isEventTypeCreateOrPush = event.type === 'CreateEvent' || event.type === 'PushEvent'
            const eventPayloadCommits = event.payload.commits
            if (isEventTypeCreateOrPush){
                if (eventPayloadCommits){
                    eventPayloadCommits.forEach(commit => {
                            eventsItems += `<li> <span> ${event.repo.name} </span> - ${commit.message}</li>`
                    })
                }
            }
        })

        if (user.events.length > 0){
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