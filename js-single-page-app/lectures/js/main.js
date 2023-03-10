// ====================IMPORTANT MESSAGE===================================

// 1) Run your Rails API server (awesome answers) on a different terminal with rail s
// 2) To run the SPA server, do not use VSCode's Live server as it doesn't have
//    all the functionality needed for cross-origin requests
// 3) Install the http server globally, and use that to run the SPA instead:
//    For example, when you type in the following command:
//    http-server -p 9999 .
//    Your app will be available on http://localhost:9999/
// 4) Make sure the above domain is listed on your Rails API's "whitelist" in cors.rb

//=================================================================

// "http://localhost:3000/api/v1/questions" GET index
// "http://localhost:3000/api/v1/questions/:id" GET show
// "http://localhost:3000/api/v1/questions" POST create
// "http://localhost:3000/api/v1/questions/:id" DELETE destroy
// "http://localhost:3000/api/v1/questions/:id" PATCH update

// Base URL that we going to send the requests to (the API server)
const baseURL = "http://localhost:3000/api/v1"

// ===============Question=========================
const Question = {
  // fetch all the questions from server
  index(){
    return fetch(`${baseURL}/questions`)
    // by default fetch is a GET request
    // so we don't need to specify the method
    // we know the path to the backend because we created the API,
    // but for external API's you will need to look at the documentation
    // If you create an API for other's to access you are responsible
    // to specify the paths for the requests in your documentation

    // fetch will always return a promise, and a promise
    // will always return a response object, and the
    // response object represents the response and it's data. 
    // We want the data of the actual response
    .then(response => {
      // console.log(response);
      return response.json();
      // normally we want it to be in some sort of text formate, but now we want it in json
      // response object has a method .json() that will parse the body of response into json format
    })
  },
  create(params){
    return fetch(`${baseURL}/questions`, {
      method: 'POST',
      credentials: 'include', // need this for cookies
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  },
  show(id){
    return fetch(`${baseURL}/questions/${id}`).then(res => res.json())
  },
  update(id, params){
    return fetch(`${baseURL}/questions/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  },
  destroy(id){
    return fetch(`${baseURL}/questions/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
  }
}

const Session = {
  create(params) {
    return fetch(`${baseURL}/session`, {
      method: 'POST',
      credentials: 'include', // need for cookies to be sent cross origin
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  }
}

// Hacky Sign-in / "Mock" sign in
Session.create({
  email: 'admin@user.com',
  password: '123'
}).then(res => console.log(res))



//==================Testing=============================

// fetch all questions
// Question.index().then(questions => console.log(questions))

// fetch a single question
// Question.show(13).then(question => console.log(question))


//===================Navigation=========================

// function navigateTo(id) {
//   document.querySelectorAll('.page').forEach(page => {
//     page.classList.remove('active')
//   })
//   document.querySelectorAll(`.page#${id}`).classList.add('active')

//   document.querySelectorAll('a.item').forEach(page => {
//     page.classList.remove('active')
//   })

//   const navLink = document.querySelector(`a[data-target=${id}]`)
//   if(navLink) {navLink.classList.add('active')}
// }

// const navbar = document.querySelector('.menu.navbar')

// navbar.addEventListener('click', event => {
//   const navLink = event.target.closest('a')

//   if (navLink) {
//     event.preventDefault()
//     const pageId = navLink.dataset.target
//     navigateTo(pageId)
//   }
// })

document.querySelectorAll(".navbar > a").forEach(aTag => {
  aTag.addEventListener("click", event => {
    event.preventDefault();
    document.querySelector(".item.active").classList.remove("active")
    event.currentTarget.classList.add("active")

    document.querySelector(".page.active").classList.remove("active")

    const sectionId = event.currentTarget.getAttribute("data-target")
    document.querySelector(`#${sectionId}`).classList.add("active")

  })
})

//=====================Index page================================

// declare a container for the list of questions
const questionsContainer = document.querySelector('.question-list')
// Index loading questions
function loadQuestions() {
  Question.index()
  .then(questions => {
    // iterate through each question and each question will return a string item
    console.log(questions);
    questionsContainer.innerHTML = questions.map( q => {
      return `
        <li>
          <a class="question-link" data-id="${q.id}" href="#">${q.id} - ${q.title}</a>
        </li>
      `
    }).join("")
  })
}

loadQuestions()

//=============================Show page=================================

const questionShowPage = document.querySelector('#question-show')

function renderQuestionShowPage(id) {
  Question.show(id)
  .then(({id, title, body, like_count}) => {
    questionShowPage.innerHTML = `
      <h2>${title}</h2>
      <p>${body}</p>
      <small>${like_count}</small>
      <div>
        <button data-action="edit" data-id="${id}" href="#">Edit</button>
        <button data-action="delete" data-id="${id}" href="#">Delete</button>
      </div>
    `
  })
}

// Navigate to a specific question show page when clicking on the question's
// link in the index
questionsContainer.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.matches('a.question-link')) {
    const questionId = event.target.dataset.id
    renderQuestionShowPage(questionId)
  }
})


//======================New Question============================
const newQuestionForm = document.querySelector('#new-question-form')
newQuestionForm.addEventListener('submit', event => {
  // remember that submit has some default behaviors we want to prevent
  event.preventDefault()
  const titleText = document.querySelector("#title").value;
  const bodyText = document.querySelector("#body").value;
  Question.create({title: titleText, body: bodyText}).then(res => {
    console.log(res);
    loadQuestions()
  })
})
