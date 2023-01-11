// Resolução do Professor

const modalWrapper = document.querySelector('.modal-wrapper');
const buttonOpenModal = document.getElementById('openModal');

buttonOpenModal.onclick = function (){
    modalWrapper
    .classList
    .remove('invisible')
}

document.addEventListener('keydown', function(event){
    console.log(event)
    const isEscKey = event.key === 'Escape'

    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }
})