$(function(){
    $(".menu-button").click(function(){
        $(this).toggleClass("change");
        $(".menu").slideToggle("slow");
    });
});