const usernameInput = document.querySelector('#username-input')

const container = document.querySelector('.container')
const divUser = document.querySelector('.user')
const divNotFound = document.createElement('div')

const profileImg = document.querySelector('#user-profile-img')
const user = document.querySelector('#user')
const dateJoined = document.querySelector('#user-github-join-date')
const profileUsername = document.querySelector('#github-username')
const bio = document.querySelector('#user-bio')
const repos = document.querySelector('#repos')
const followers = document.querySelector('#followers')
const following = document.querySelector('#following')
const userLocation = document.querySelector('#user-location')
const twitter = document.querySelector('#user-twitter')
const blog = document.querySelector('#user-blog')
const company = document.querySelector('#user-company')


function setGithubUser(user) {
    profileImg.src= user.avatar_url
    user.textContent = user.name
    dateJoined.textContent = user.created_at
    profileUsername.textContent = user.login
    profileUsername.setAttribute('href', user.html_url)
    repos.textContent = user.public_repos
    followers.textContent = user.followers
    following.textContent = user.following
    
    // Optional info
    user.bio ? bio.textContent = user.bio : userLocation.textContent = "This profile has no bio"
    user.location ? userLocation.textContent = user.location : userLocation.textContent = "Not Available"
    user.twitter ? twitter.textContent = user.twitter : twitter.textContent = "Not Available"
    user.blog ? blog.textContent = user.blog : blog.textContent = "Not Available"
    user.company ? company.textContent = user.company : company.textContent = "Not Available"
}

function userNotFound() {
    divUser.remove()
    divNotFound.classList.add('not-found')
    divNotFound.innerHTML = `
        <img src="./img/404-error-with-a-cute-animal-animate.svg" alt="Icon Página não encontrada">
    `
    container.appendChild(divNotFound)
}

function UserFound() {
    divNotFound.remove()
    container.appendChild(divUser)
}

async function searchUser(ev) {
    ev.preventDefault()

    const username = usernameInput.value

    const githubUser = await fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(response => { return response })
        .catch((error) => { console.log('Error: '+error) });

    console.log(githubUser)
    
    if(githubUser.message){
        return userNotFound()
    }
    
    setGithubUser(githubUser)
    usernameInput.value = ''

}

/** Events */
document.querySelector('button[type=submit]').addEventListener('click', searchUser)