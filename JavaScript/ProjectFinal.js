// show login
const closeModals = document.querySelectorAll('.js-closeModal')
const loginBtn = document.querySelector('.js-login')
const modallogin = document.querySelector('.js-modal-login')

function openLogin(){
     modallogin.classList.add('open')
}

function closeLogin(){
     modallogin.classList.remove('open')
}

for (var closeModal of closeModals){
     closeModal.addEventListener('click' , closeLogin)
}

loginBtn.addEventListener('click' , openLogin)



// end show loggin
