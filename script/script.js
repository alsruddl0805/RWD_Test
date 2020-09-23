// LNB 메뉴 구현

$("#mainMenu>li").mouseover(function(){
    $(this).children(".subMenu").stop().fadeIn();
});

$("#mainMenu>li").mouseout(function(){
    $(this).children(".subMenu").stop().fadeOut();
});

// Slide 구현

function slideFade() {
    $("#slideFrame>a:first").fadeOut(2000,function(){
        $(this).insertAfter("#slideFrame>a:last");
    });
    $("#slideFrame>a:nth-child(2)").fadeIn(2000);
}

setInterval(slideFade,2000);
