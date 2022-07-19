const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    followersUrl: '',
    following: '',
    followingUrl: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.followersUrl = gitHubUser.followers_url
        this.following = gitHubUser.following
        let gitHubUserFollowingUrl = gitHubUser.following_url.replace("{/other_user}", "")
        this.followingUrl = gitHubUserFollowingUrl
    },
    setRepository(repositories){
        this.repositories = repositories
    },
    setEvents(events){
        this.events = events
    }
}

export { user }