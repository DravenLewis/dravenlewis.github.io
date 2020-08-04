
var color_combos = [
    ["#ff0000", "#fb7e7e", 13], // Red
    ["#ffa900", "#ff1f00", 13], // Orange
    ["#ffa900", "#fff600", 13], // Yellow
    ["#107e00", "#00ff46", 13], // Green
    ["#006aff", "#021d8c", 13], // Blue
    ["#006aff", "#ff00c4", 13], // Blueish-Purple
    ["#4b054d", "#d8a00ff", 13], // Purple
    ["#828282", "#ffffff", 13], // White
    ["#000000", "#6a6a6a", 13]  // Black
];

const RED = color_combos[0];
const ORANGE = color_combos[1];
const YELLOW = color_combos[2];
const GREEN = color_combos[3];
const BLUE = color_combos[4];
const BPURPLE = color_combos[5];
const PURPLE = color_combos[6];
const WHITE = color_combos[7];
const BLACK = color_combos[8];

if (window.jQuery) {
    function applyColorSelector(selector, color) {
        const element = $(selector);
        applyColor(element, color);
    }

    function applyColor(element, color) {
        var hue1 = color[0];
        var hue2 = color[1];
        var degs = color[2];

        element.css({background : hue1});
        element.css({background : `linear-gradient(${degs}deg, ${hue1} 0%, ${hue2} 100%)`});
    }

    function fetchList(callback){
        if(window.xhr){
            var request = new XHR();
            request.getFileData("http://dravenlewis.github.io/gen/showcaseListing.json",(error, message) => {
                callback(error,JSON.parse(message));
            });
        }else{
            console.log("[HireController] XHR Module not loaded, make sure you load XHR.js");
        }
    }
} else {
    console.log("[HireController] Cannot Load Module, JQuery Required.");
}