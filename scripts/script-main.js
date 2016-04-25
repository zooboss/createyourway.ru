$(document).ready(function()
{
    
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
    
    
});