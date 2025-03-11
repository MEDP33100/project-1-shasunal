window.checkEndingAnimation = (index)=>{
    const endingSound = document.getElementById("endingSound");
    
    if(index===10){
        endingSound.currentTime = 0;
endingSound.volume = 1;
endingSound.play();
    }
    else{
        gsap.to(endingSound, {
            volume:0,
            duration:2,
            onComplete:()=>{
                endingSound.pause();
                endingSound.currentTime=0;
            }
        });
    }
};