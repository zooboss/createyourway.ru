$(function(){
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 0.8
            
        }
    });
    
     var container = new ScrollMagic.Scene({
        triggerElement: ".line-1"
    })
    .setClassToggle(".line-1", "line-active")
    .addTo(controller);
  
    var container = new ScrollMagic.Scene({
        triggerElement: ".line-2"
    })
    .setClassToggle(".line-2", "line-active")
    .addTo(controller);
    
    var container = new ScrollMagic.Scene({
        triggerElement: ".line-3"
    })
    .setClassToggle(".line-3", "line-active")
    .addTo(controller);
    
    var container = new ScrollMagic.Scene({
        triggerElement: ".line-4"
    })
    .setClassToggle(".line-4", "line-active")
    .addTo(controller);
  
}) 