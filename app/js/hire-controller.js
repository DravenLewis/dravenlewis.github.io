
var rotation = 45;

var color_combos = [
    ["#e74c3c", "#c0392b", rotation], // Red
    ["#e67e22", "#d35400", rotation], // Orange
    ["#f1c40f", "#f39c12", rotation], // Yellow
    ["#2ecc71", "#27ae60", rotation], // Green
    ["#3498db", "#2980b9", rotation], // Blue
    ["#1abc9c", "#16a085", rotation], // Blueish-Purple
    ["#9b59b6", "#8e44ad", rotation] // Purple
    //["#ecf0f1", "#bdc3c7", rotation], // White
    //["#95a5a6", "#7f8c8d", rotation]  // Black
];

const RED = color_combos[0];
const ORANGE = color_combos[1];
const YELLOW = color_combos[2];
const GREEN = color_combos[3];
const BLUE = color_combos[4];
const TEAL = color_combos[5];
const PURPLE = color_combos[6];
const WHITE = color_combos[7];
const BLACK = color_combos[8];

if (window.jQuery) {
    function applyColorSelector(selector, color) {
        console.log("SELECTOR: " + selector + " COLOR: " + color);
        const element = $(selector);
        applyColor(element, color);
    }

    function applyColor(element, color) {
        color = color || ORANGE;
        var hue2 = color[0];
        var hue1 = color[1];
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