$(document).ready(function(){
    $("header").fadeIn(4000);
    $(".logo").fadeIn(3000);
    $(".name").fadeIn(3000);
});

$(document).ready(function(){
    $("nav").mouseover(function(){
        $(this).animate({backgroundColor:"#FFF"}, 1000);
    }).mouseout(function(){
        $(this).animate({backgroundColor:"#000"}, 1000);
    });
});