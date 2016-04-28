/*$(function() {
  
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
            
        }
    });
    
    var slides = document.querySelectorAll("section.scene");
    
    for (var i=0; i < slides.length; i++)
        {
            new ScrollMagic.Scene({
                triggerElement: slides[i]
                
            })
            
            .setPin(slides[i])
            .addIndicators()
            .addTo(controller);
        }
    
   
});

*/

$(function(){
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
    
     var sitename = new ScrollMagic.Scene({
        triggerElement: ".sitename", duration: 200
    })
    .setClassToggle(".sitename", "highlight")
    .addIndicators()
    .addTo(controller);
  
  
}) 