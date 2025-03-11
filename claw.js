window.checkClawAnimation= (index)=>{

        const claw = document.querySelector(".claw");

        if (index===6){
         
            if (!window.clawDraggable){
                window.clawDraggable = Draggable.create(claw,{
                    type: "x,y",
                
                    inertia: true, 
                })[0]; 
            }
        } 
};
