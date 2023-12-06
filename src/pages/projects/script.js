const firstCard = document.querySelector('#first');
const secondCard = document.querySelector('#second');
const tirdCard = document.querySelector('#tird');
const fourthCard = document.querySelector('#fourth');
const fifthCard = document.querySelector('#fifth');
const firstModal = document.querySelector('#first-modal');
const secondModal = document.querySelector('#second-modal');
const tirdModal = document.querySelector('#tird-modal');
const fourthModal = document.querySelector('#fourth-modal');
const fifthModal = document.querySelector('#fifth-modal');
const btnClose = document.querySelectorAll('.btn-close');

firstCard.addEventListener('click', function () {
    firstModal.style.display = 'flex';
})

secondCard.addEventListener('click', function () {
    secondModal.style.display = 'flex';
})

tirdCard.addEventListener('click', function () {
    tirdModal.style.display = 'flex';
})

fourthCard.addEventListener('click', function () {
    fourthModal.style.display = 'flex';
})

fifthCard.addEventListener('click', function () {
    fifthModal.style.display = 'flex';
})

btnClose.forEach(function (close) {
    close.addEventListener('click', function () {
        firstModal.style.display = 'none';
        secondModal.style.display = 'none';
        tirdModal.style.display = 'none';
        fourthModal.style.display = 'none';
        fifthModal.style.display = 'none';
    });
})