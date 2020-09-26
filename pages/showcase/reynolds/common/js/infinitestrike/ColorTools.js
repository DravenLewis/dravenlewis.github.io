
function darken(percentage, element = $()){
    var {r,g,b} = getColor(element);

    var {r,g,b} = getColor(element);
    r = clamp(Math.floor(r - (r * percentage)),0,255);
    g = clamp(Math.floor(g - (g * percentage)),0,255);
    b = clamp(Math.floor(b - (b * percentage)),0,255);

    element.css({"cssText" : `background-color: rgb(${r},${g},${b}) !important;`});
}

function lighten(percentage, element = $()){
    var {r,g,b} = getColor(element);
    r = clamp(Math.floor(r + (r * percentage)),0,255);
    g = clamp(Math.floor(g + (g * percentage)),0,255);
    b = clamp(Math.floor(b + (b * percentage)),0,255);

    element.css({"cssText" : `background-color: rgb(${r},${g},${b}) !important;`});
}

function getColor(element = $()){
    var colorString = element.css("background-color");
    colorString = colorString.replace("rgb(","").replace("a","");
    colorString = colorString.replace(")","").trim();

    var colorValues = colorString.split(",");

    var r = parseInt(colorValues[0]);
    var g = parseInt(colorValues[1]);
    var b = parseInt(colorValues[2]);
    if(colorValues.length == 4){
        var a = parseFloat(colorValues[3]);
        return {r,g,b,a};
    }

    return {r,g,b};
}

function clamp(value, min, max){
    return Math.max(min,Math.min(max,value));
}
