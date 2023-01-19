// Lab 2.

// a)
document.querySelector('#logo a').getAttribute('href')
// b)
document.querySelectorAll('a').length
// c)
document.querySelectorAll('a').forEach(link => {
    link.innerText= "Ryo Sorensen"
})
// d)
document.querySelector('#logo a').setAttribute('href', 'http://www.google.com')
// e)
document.querySelectorAll('body').forEach(element => {
    element.style.fontFamily = 'papyrus'
})

// stretch 1
const dates = document.querySelectorAll('td')

for(let i = 0; 0 < dates.length; i++){
    console.log(typeof(dates[i]));
    if(i % 2 === 0){
        dates[i].style.backgroundColor = 'red'
    }else{
        dates[i].style.backgroundColor = 'green'
    }
}

// stretch 2 
document.querySelectorAll('p, a').forEach(el =>{
  if(el.innerText.includes('es')){
    el.remove()
  }
})

// Lab 3.

// a)
document.querySelectorAll('a').forEach(element => {
    element.removeAttribute('class')
    element.style.color = 'red'
})

