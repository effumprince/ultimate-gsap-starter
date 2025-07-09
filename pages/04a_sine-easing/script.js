import gsap from 'gsap';

const button = document.querySelector('.scroll-to-top');
let isFloating = true;
window.addEventListener ('scroll', () => {
    if (window.scrollY > 500){
        button.classList.add('show');

        if (isFloating) {
            gsap.to ( button, {
                y: -40,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.out'
            })

            isFloating = false;
        }
       
    }

     else {
            button.classList.remove ('show');
        }
})


button.addEventListener ('mouseenter', () => {
gsap.to(
    button,
    {
        scale: 1.1,
        duration: 0.2,
    }
)

button
})

button.addEventListener ('click', () => {
gsap.to(
    button,
    {
        scale: 1,
        duration: 0.2,
    }
)

button
})


button.addEventListener('click', () =>{
window.scroll(0,0)
}
)
