document.addEventListener("DOMContentLoaded", () => {
    const foot1 = document.querySelector(".foot");
    const foot2 = document.querySelector(".foot2");

    const footstepsSound = document.getElementById("footstepsSound");


    //hide feet
    gsap.set([foot1, foot2],{display:"none"});

    // call script.js
    window.checkFootAnimation=(index) => {
        if (!foot1 || !foot2) return;

        if (index===5) { // plays on this slide
            gsap.set([foot1, foot2], { display: "block" });
            gsap.set(foot2, { rotation: -10 });
           

        //audio
        footstepsSound.currentTime = 0;
        footstepsSound.volume = 1;
        footstepsSound.play();

            gsap.to(foot1,{
                rotation:40,
                yoyo:true,
                repeat:-1,
                duration:0.8,
                ease:"power1.inOut",
                overwrite:"auto",
            });
            gsap.to(foot2,{
                rotation:40,
                yoyo:true,
                repeat:-1,
                duration:0.8,
                ease:"power1.inOut",
                overwrite:"auto",
                delay:0.8,
            });
            gsap.to([foot1,foot2],{
                x: "+=2800",
                duration:6,
                ease:"linear",
                onComplete:()=>{
                gsap.set([foot1,foot2],{display:"none" });// Hide feet after animation completes
               
                //fade music
                gsap.to(footstepsSound,{
                    volume:0,
                    duration:2,
                    onComplete:()=>{
                        footstepsSound.pause();
                        footstepsSound.currentTime = 0;
                    }
                });
            
            
            
            
            }
            });
        } else {

            gsap.killTweensOf([foot1,foot2]); // Stop animation
            gsap.set([foot1,foot2], {rotation:0, x:0, display:"none"});

            footstepsSound.pause();
            footstepsSound.currentTime=0;
        }
    };
});
