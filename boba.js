window.onload = () => {
    const bobas = document.querySelectorAll(".boba1, .boba2, .boba3, .boba4, .boba5");

    const startingSound = document.getElementById("startingSound");


    function playSound(){
        if (startingSound){
            startingSound.volume = 1;
        startingSound.play();
    


setTimeout(()=>{
    gsap.to(startingSound, {
        volume:0,
        duration:25, 
        onComplete:()=>{
            startingSound.pause();
            startingSound.currentTime = 0;
        }
    });
}, 0);
 
}
    }

    document.addEventListener("click", playSound, {once:true});




    bobas.forEach((boba,index)=>{
let hoverStarted = false;

boba.addEventListener("mouseenter", ()=>{
    if(!hoverStarted) {
        gsap.to(boba, {
            x:"+=10",  
            y:"+=10", 
            duration:0.8,
            repeat:-1, 
            yoyo:true,
            ease:"power1.inOut",
        delay: index*0.2,
    });
hoverStarted = true;
    }
});


});
    
};







window.checkBobaAnimation=(index)=>{
    if(index!==2) return;
    const straw = document.querySelectorAll(".boba6, .boba7, .boba8");

    straw.forEach((boba, index) => {
        gsap.to(boba, {
            y:"-800%", 
            x:"10%",
            duration:3, 
            repeat:0, 
            ease:"power1.inOut",
            onComplete: () => {
                gsap.to(boba,{opacity:0,duration:1}); 
            }
        });
    });
};

