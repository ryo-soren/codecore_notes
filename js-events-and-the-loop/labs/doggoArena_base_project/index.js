// Lab 1.

const doggos = document.querySelectorAll('.doggo.fighter')
doggos.forEach(dog => {
    dog.addEventListener('click', event => {
        doggos.forEach(doggo => {
            doggo.setAttribute('class', 'doggo fighter')
        })
        event.currentTarget.classList.toggle("selected")
    })
})

const teams = document.querySelectorAll('.title')
teams.forEach(team => {
    team.addEventListener('click', () => {
        team.parentElement.querySelector('.roster').appendChild(document.querySelector('.selected'))
    })
})

// stretch
const body = document.querySelectorAll('html')
body.forEach(node => {
    node.addEventListener('click', element => {
        if (element.target.matches('.selected') === false) {
            element.currentTarget.querySelector('.selected').setAttribute('class', 'doggo fighter')
        }
    })
})

// Lab 2

const applicantPreview = document.querySelector('#applicant-preview')

const nameInput = document.querySelector('input[name = name]')
nameInput.addEventListener('input', event => {
    const name = event.currentTarget.value
    applicantPreview.querySelector('h1').innerText = name
})

const pictureInput = document.querySelector('input[name = picture-url]')
pictureInput.addEventListener('input', event => {
    const url = event.currentTarget.value
    applicantPreview.querySelector('.doggo.blank').style.backgroundImage = `url(${url})`
})

const teamNameInput = document.querySelector('input[name = team-name]')
teamNameInput.addEventListener('input', event => {
    const teamName = event.currentTarget.value
    if (teamName === 'salmon') {
        applicantPreview.style.backgroundColor = 'salmon'
    } else if(teamName === 'teal') {
        applicantPreview.style.backgroundColor = 'teal'
    }
    else{
        applicantPreview.style.backgroundColor = 'grey'
    }
})