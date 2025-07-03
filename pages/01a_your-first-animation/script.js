gsap.to('.box', {
    rotation: 27,
    x: -70,
    repeat:-1,
    yoyo: true,
    duration: 0.5,
});


gsap.to('.card', {
    rotation: 27,
    y: 20,

    onComplete: () =>{
        gsap.to('.card', {
            y: -50,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
        
        })
    }
    
});
