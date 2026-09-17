const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const btnProximo = document.querySelector('.next');
const btnAnterior = document.querySelector('.prev');
let atual = 0;
function mostrarSlide(index){
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    atual = index;
};
dots.forEach((dot,index)=> {
    dot.addEventListener('click', () => mostrarSlide(index));
});

btnProximo.addEventListener('click', () => {
    let proximo = atual + 1;
    if (proximo >= slides.length) proximo = 0;
    mostrarSlide(proximo);
});

btnAnterior.addEventListener('click', () => {
    let anterior = atual - 1;
    if (anterior < 0) anterior = slides.length - 1;
    mostrarSlide(anterior);
});
