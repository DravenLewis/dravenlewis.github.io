$(document).ready(() => {
    setTimeout(() => {
        $(".preloader").fadeToggle("slow", "linear");
    }, 1000);
    makeMobileChanges();
    new ISNotification("#e74c3c", "This is not a real site. This is a demo.", FOREVER, BOTTOM, true).show()
});

function makeMobileChanges() {
    if (isMobile()) {

        $(".is-main-view").css({ "margin-left": "0px" });
        $(".is-side-bar").css({ "width": "0px" });

        $(".is-nav-button").click(() => {
            $(".is-main-view").animate(
                { "margin-left": "100%" },
                200);
            $(".is-side-bar").animate(
                { "width": "100%" },
                200);
            $(".is-side-bar").show();
        });

        $(".is-back-button").click(() => {
            $(".is-main-view").animate(
                { "margin-left": "0%" },
                200);
            $(".is-side-bar").animate(
                { "width": "0%" },
                200);
            $(".is-side-bar").show();
        });
    } else {
        $(".is-main-view").css({ "margin-left": "20%" });
        $(".is-side-bar").css({ "width": "20%" });
        $(".call-to-action").css({ "font-size": "2px !important" });
    }
}

function isMobile() {
    if (window.matchMedia("only screen and (max-width: 760px)").matches) {
        return true;
    } else {
        return false;
    }
}
