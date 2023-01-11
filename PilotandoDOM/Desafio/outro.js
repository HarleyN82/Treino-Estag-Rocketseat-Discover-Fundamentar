const modalWrapper = document.querySelector('.modal-wrapper');
const btnOpenModal = document.getElementById('openModal');
const div = document.querySelector('#div');

function click(){
    modalWrapper.classList.toggle('invisible');
    console.log("abri")
}

div.setAttribute('class','p-8 bg-white text-center rounded')
div.innerText = "Tecle ESC para fechar"

function esc(){''
    modalWrapper.classList.remove('invisible');
    modalWrapper.classList.toggle('invisible');
    console.log('fechei')
}

btnOpenModal.onkeydown = function (e) {
    console.log('Pressionei o ESC')
    if(e.currentTarget.value = 27){  //  key === 'Escape'
        esc();
    }
}

btnOpenModal.onclick = click;

/*Link do Keyboard: https://br.ccm.net/faq/8925-javascript-manipulacao-dos-controles-do-teclado#:~:text=Eventos%20do%20teclado%20Veja%20a%20lista%20dos%20eventos,o%20Onkeypress%20e%2C%20do%20outro%2C%20Onkeydown%20e%20Onkeyup.*/