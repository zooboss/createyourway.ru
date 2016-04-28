$(document).ready(function()
{
    /*--------------------------Section 2 hover effects---------------------*/
    $(".item").hover(function()
    {
        var $p = $(this).find("p");
        $($p).stop(true, true).effect('drop',{direction:"up"}, 500);
        $(this).removeClass("highlight-end");
        $(this).addClass("highlight");
    },
    function()
    {
        var $p = $(this).find("p");
        $($p).stop(true, true).show('drop',{direction:"up"}, 500);
        $(this).removeClass("highlight");
        $(this).addClass("highlight-end");
    });
  
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
            
        }
        else
        {
            $(".button").removeClass("click");
            $(".button").addClass("click-end");
            $(".sitename").removeClass("click");
            $(".sitename").addClass("click-end");
        }
    
       clicks++;
    });
     
    
});
