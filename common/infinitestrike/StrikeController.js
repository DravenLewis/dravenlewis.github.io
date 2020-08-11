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

window.strike = strike;