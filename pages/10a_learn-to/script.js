import gsap from 'gsap';


const showToastLoop = () =>{
    gsap.to('.toast',{
        y:-120,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power4.out',
        onComplete:() => {
         gsap.to('.toast', {
            y:0, 
            opacity:0,
            scale:0.95,
            delay:2.5,
            ease: 'power1.inOut',
            onComplete:() =>{
                setTimeout(showToastLoop, 2500)
            }
         })
        }
    })
}

showToastLoop()
