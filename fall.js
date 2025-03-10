window.checkFallAnimation=(index)=>{
    if (index !==8) return;


const fireSound = document.getElementById("fireSound");

fireSound.volume = 1;
fireSound.play();

    const cup = document.querySelector(".blackcup");

    gsap.to(cup, {
        rotation: 360,
        y:"+=580",
        duration:3,
        ease:"power1.inOut",
        onComplete:()=>{
            gsap.to(cup, {
                opacity:0,
                duration:1,
                onComplete:()=>{
                    gsap.set(cup, {display:"none"});
                }
            });

            gsap.to(fireSound,{
                volume:0,
                duration:5,
                onComplete:()=>{
                    fireSound.pause();
                }
            });
        }
    });
    console.log("cup falling animation");
};

 