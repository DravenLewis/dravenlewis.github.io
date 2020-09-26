
var strikeController = new window.strike();

$(document).ready(() => {
    $(".close").click(() => {
        $(".nav-mobile").animate({
            "left" : "-100%"
        });
    });
    $(".menu").click(() => {
        $(".nav-mobile").animate({
            "left" : "0px"
        });
    });

    if(strikeController.isMobile()){
        PostCardInitMobile();
    }else{
        PostCardInit();
    }

    new ISNotification("#FFFF33","This site is a demo, links and navigation are not available.",FOREVER,BOTTOM,true).show();
});