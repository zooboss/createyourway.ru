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
     
    
});
