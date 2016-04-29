$(document).ready(function()
{
    /*--------------------------Section 3 hover effects---------------------*/
    $(".item").hover(function()
    {
        //highlight effect on left side
        
        var $p = $(this).find("p");
        $($p).addClass("highlight-icon");
        $(this).addClass("highlight");
        
        //hide all right side elements
        
        $(".container-right ul").addClass("hidden-ul");
        
        //activate actual right side element
        
        if ($(this).hasClass("item-1")){
                $(".container-right ul:nth-of-type(1)").removeClass("hidden-ul");
                  
        }
        
        if ($(this).hasClass("item-2")){
                $(".container-right ul:nth-of-type(2)").removeClass("hidden-ul");
                  
        }
        
        if ($(this).hasClass("item-3")){
                $(".container-right ul:nth-of-type(3)").removeClass("hidden-ul");
                  
        }
            
    },
    function(){
        
        //remove highlight effect on mouseleave
        
        var $p = $(this).find("p");
        $($p).removeClass("highlight-icon");
        $(this).removeClass("highlight");
    }                
                    
    );
  
    /*--------------------------Section 1 button effects---------------------*/    
    $(".button").hover(function()
    {
        
        $(this).removeClass("button-highlight-end");
        $(this).addClass("button-highlight");
    },
    function()
    {
        
        $(this).removeClass("button-highlight");
        $(this).addClass("button-highlight-end");
    });
    
    
    var clicks = 0;
    $(".button").click(function()
    {
        if (clicks % 2 == 0)
        {
            $(".button").removeClass("click-end");
            $(".button").addClass("click")
            $(".sitename").removeClass("click-end");
            $(".sitename").addClass("click");
            $("section.one").addClass("full");
            $("section.one").removeClass("nofull");
            
        }
        else
        {
            $(".button").removeClass("click");
            $(".button").addClass("click-end");
            $(".sitename").removeClass("click");
            $(".sitename").addClass("click-end");
            $("section.one").removeClass("full");
            $("section.one").addClass("nofull");
        }
    
       clicks++;
    });
     
    
});
