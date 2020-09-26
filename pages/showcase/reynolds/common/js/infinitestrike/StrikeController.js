const LANDSCAPE = 0;
const PORTRAIT = 1;

function strike(){
    this.orientation = LANDSCAPE;
    this.lastWidth = 0;
    this.lastHeight  = 0;
    this.init = () => {
        this.orientation = (window.screen.width > window.screen.height) ? LANDSCAPE : PORTRAIT;
        this.lastWidth = window.screen.width;
        this.lastHeight = window.screen.height;

        window.addEventListener("resize",() => {
                if(window.screen.width != this.lastWidth || window.screen.height != this.lastHeight){
                    if(this.orientation != this.getCurrentOreientation()){
                        this.onOrientationChange();
                        this.orientation = this.getCurrentOreientation();
                        this.lastWidth = window.screen.width;
                        this.lastHeight = window.screen.height;
                    }
                }
        },false);
    }
    this.getCurrentOreientation = () =>{
        return (window.screen.width > window.screen.height) ? LANDSCAPE : PORTRAIT;
    }
    this.onOrientationChange = () => {};
    this.isMobile = () => {
        var UA = navigator.userAgent || navigator.vendor || window.opera;
        if(/Android|iP(ad|hone|od)/.test(UA)){ // Device Not Supported in Full Version
            return true;
        }else if(window.matchMedia("only screen and (max-width: 760px)").matches){ // Window Size not supported
            return true;
        }
        return false;
    }
}

function PostCardInitMobile(){
    $(".is-postcard-main").each((i) => {
        $(`.is-postcard-main:eq(${i})`).addClass("is-postcard-main-mobile");
    });
    $(".is-postcard-sub").each((i) => {
        $(`.is-postcard-sub:eq(${i})`).addClass("is-postcard-sub-mobile");
    });
}

function PostCardInit(){
    if(window.jQuery){
        $(".is-postcard-container-left").each((i) => {
            var postcard = $(`.is-postcard-container-left:eq(${i})`);
            var main = postcard.find(".is-postcard-main");
            var sub = postcard.find(".is-postcard-sub");
            sub.css({"width" : "69%"});
            postcard.height(Math.max(500,sub.height()));
            main.height(postcard.height());
        });
    
        $(".is-postcard-container-right").each((i) => {
            var postcard = $(`.is-postcard-container-right:eq(${i})`);
            var main = postcard.find(".is-postcard-main");
            var sub = postcard.find(".is-postcard-sub");
            sub.css({
                "width" : "68.5%",
                "paddingTop": "0px",
                "paddingLeft": "0px",
            });
            postcard.height(Math.max(500,sub.height()));
            main.height(postcard.height());
        });
    }else{
        console.log("[StrikeController::PostCardInit] This module requires JQuery, please ensure you have it installed.");
    }
}

function themeDark(){
    //$(".w3-white, .is-white").addClass("is-ui-dark").removeClass("w3-white").removeClass("is-white");
    //$("body").addClass("is-slate");
    //$("#waffle").css({"filter" : "invert(1)"});
}

function onDocumentInit(callback = () => {}){
    if(window.jQuery){
        $(document).ready(callback);
    }else{
        window.addEventListener("load",callback);
    }
}

window.strike = strike;