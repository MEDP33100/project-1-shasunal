//for slide animation and text animation

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(TextPlugin);

    //track what slide it is on from Chatgpt
    const contents = gsap.utils.toArray("#horizontal .content");
    const container = document.getElementById("horizontal");
    let currentIndex = 0;
    const totalSlides = contents.length;

    // each text
    const text1 = document.querySelector(".text1");
    const text2 = document.querySelector(".text2");
    const text3 = document.querySelector(".text3");
    const text4 = document.querySelector(".text4");
    const text5 = document.querySelector(".text5");
    const text6 = document.querySelector(".text6");
    const text7 = document.querySelector(".text7");
    const text9 = document.querySelector(".text9");
    const text10 = document.querySelector(".text10");

    // Track text to stop replay
    let textPlayed = new Set();

  //moves slides horizontally
    const slideAnimation = (index) => {
        gsap.to(container, {
            x: -index * window.innerWidth,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
                triggerTextAnimation(index);//calls animation
                if(typeof window.checkBobaAnimation ==="function"){
                    window.checkBobaAnimation(index); //boba.js
                }
                if(typeof window.checkFootAnimation ==="function"){
                    window.checkFootAnimation(index); //foot.js
                }
                if(typeof window.checkClawAnimation ==="function"){
                    window.checkClawAnimation(index); //claw.js
                }
                if(typeof window.checkPickupAnimation ==="function"){
                    window.checkPickupAnimation(index); //pickup.js
                }
                if(typeof window.checkFallAnimation ==="function"){
                    window.checkFallAnimation(index); //fall.js
                }
                if(typeof window.checkEndingAnimation ==="function"){
                    window.checkEndingAnimation(index); //ending.js
                }
                
            }
        });
    };

    // event listener for arrow keys
    document.addEventListener("keydown",(event)=>{
        if (event.key === "ArrowRight" && currentIndex < totalSlides - 1) {
            currentIndex++;
            slideAnimation(currentIndex);
        } else if (event.key === "ArrowLeft" && currentIndex > 0) {
            currentIndex--;
            slideAnimation(currentIndex);
        }
    });

    // trigger typing animation only on the correct slide
    const triggerTextAnimation=(index) =>{
        if (textPlayed.has(index)) return; //has text, skip

        if(index===1){ 
            gsap.to(text1,{
                duration: 3,
                text: "Why, thanks for having me. <br> It's a true pleasure meeting you.  ",
                ease: "power1.inOut",
        });
        } 
        else if(index===2){
            gsap.to(text2,{
                duration: 3,
                text: "Hahaha! <br> That tickles!",
                ease: "power1.inOut",
        });
        } 
        else if (index===3){
            gsap.to(text3,{
                duration: 3.5,
                text: "Phew! <br> Where to next?",
                ease: "power1.inOut",
        });
        } 
            else if(index ===4){
            gsap.to(text4,{
            duration: 2,
            text: "Huh? This isn't right.",
            ease: "power1.inOut",
        });
        }
        else if(index ===5){
            gsap.to(text5,{
            duration: 3,
            text: "Hey! Watch it!",
            ease: "power1.inOut",
        });
    }
    else if(index ===6){
        gsap.to(text6,{
        duration: 1,
        text: "!",
        ease: "power1.inOut"
    });
    }
        else if(index ===7){
            gsap.to(text7,{
            duration: 2,
            text: "Thanks stranger!",
            ease: "power1.inOut"
        });
        }
        
        else if(index ===9){
            gsap.to(text9,{
            duration: 4,
            text: "After lots of melting and molding... ",
            ease: "power1.inOut"
        });
        }
        else if(index ===10){
            gsap.to(text10,{
            duration: 3,
            text: "Thank you for choosing to recycle!",
            ease: "power1.inOut"
        });
        }
        
//track slide, does not repeat
        textPlayed.add(index); 
    };

});
