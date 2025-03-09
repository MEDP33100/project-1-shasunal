window.checkPickupAnimation =(index)=>{
    const pickup = document.querySelector(".pickup");


    if (index===7){
        gsap.set(pickup, { display: "block" });

        gsap.to(pickup, {
            rotation: 30,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        console.log(" Pickup animation started");
    } else {
        gsap.set(pickup, { rotation: 0, display: "none" });
     
    }
};
