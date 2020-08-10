var notifs = [];

$(document).ready(() => {

    setTimeout(() => {
        $(".preloader").fadeToggle("slow", "linear");
    }, 1000);

    makeMobileChanges();

    $(".is-widget-bubble").click(() => {
        $(".is-widget-bubble-menu").slideToggle(100);
    });
    $(".is-dismiss").click(() => {
        $(".is-widget-bubble-menu").slideToggle(100);
    });
    $(".w3-button").click(() => {
        clear();
        var notif = new ISNotification("#FFFF00","Demo Button Clicked!",FOREVER,BOTTOM,true);
        notifs.push(notif);
        notif.show();
    });

    window.addEventListener("resize",() => {
        $(".preloader").show();
        setTimeout(() => {
            $(".preloader").fadeToggle("slow", "linear");
        }, 1000);
    
        makeMobileChanges();
    },false);
});

function clear(){
    for(var i = 0; i < notifs.length; i++){
        notifs[i].hide();
    }
}

function makeMobileChanges() {

    $(".hamburger").hide();
    $(".back").hide();

    if (isMobile()) {

        $(".hamburger").show();
        $(".back").show();


        $(".main-content").css({ "margin-left": "0px" });
        $(".w3-sidebar").css({ "width": "0px" });

        $(".hamburger").click(() => {
            $(".main-content").animate(
                { "margin-left": "100%" },
                200);
            $(".w3-sidebar").animate(
                { "width": "100%" },
                200);
            $(".w3-sidebar").show();
        });

        $(".back").click(() => {
            $(".main-content").animate(
                { "margin-left": "0%" },
                200);
            $(".w3-sidebar").animate(
                { "width": "0%" },
                200);
            $(".w3-sidebar").show();
        });
    } else {
        $(".main-content").css({ "margin-left": "20%" });
        $(".w3-sidebar").css({ "width": "20%" });
    }
}

function isMobile(){
    var UA = navigator.userAgent || navigator.vendor || window.opera;
    if(/Android|iP(ad|hone|od)/.test(UA)){ // Device Not Supported in Full Version
        return true;
    }else if(window.matchMedia("only screen and (max-width: 760px)").matches){ // Window Size not supported
        return true;
    }
    return false;
}