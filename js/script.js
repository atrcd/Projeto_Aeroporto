let navBar = document.querySelector('#header')

document.addEventListener('scroll', () =>{
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add('rolar')
    }else{
        navBar.classList.remove('rolar')
    }
})


const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
} )

const articles = document.querySelectorAll('.hidden')
const contatos = document.querySelectorAll('.contatos-hi')
const comoFunc = document.querySelectorAll('.func')
const diferences = document.querySelector('.diference')

articles.forEach((article) => myObserver.observe(article))
contatos.forEach((contato) => myObserver.observe(contato))
comoFunc.forEach((func) => myObserver.observe(func))
myObserver.observe(diferences);