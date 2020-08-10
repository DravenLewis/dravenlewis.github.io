
screen.orientation.lock("portrait");

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
});


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

function isMobile() {
    if (window.matchMedia("only screen and (max-width: 760px)").matches) {
        return true;
    } else {
        return false;
    }
}