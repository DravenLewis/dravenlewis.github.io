
class Checkbox {
    constructor(color, name, value) {
        this.color = color;
        this.name = name;
        this.value = value;
        this.onvaluechanged = (value) => { return true; };
    }

    attach(to = $()) {
        this.prototype = $(`<div id = "${this.name}"class = "checkswitch"><div active = "false" class="checkswitch-inner"></div></div>`);
       
        this.changecolor(this.color);

        this.prototype.click(() => {
            const elem = this.prototype.find(".checkswitch-inner");
            if (this.onvaluechanged(!((elem.attr("active") == "true") ? true : false))) {
                this.value = !((elem.attr("active") == "true") ? true : false)
                elem.attr("active", "" + !((elem.attr("active") == "true") ? true : false));
            }

        });

        to.append(this.prototype);
    }

    changecolor(color) {
        this.prototype.css({
            "border": `3px solid ${color}`,
            "background": darken(color, 0.75)
        });

        this.prototype.find(".checkswitch-inner").css({
            "background": `${color}`
        });
    }

    destroy() {
        this.prototype.remove();
    }
}

function darken(color = "", percentage = 0) {
    if (!color.includes("#")) {
        return;
    }

    var col = parseInt(color.replace("#", ""), 16);

    var modifiedColors = {
        red: Math.round(clamp((((col >> 16) & 0xFF) / 255) * percentage, 0, 1) * 255).toString(16),
        green: Math.round(clamp((((col >> 8) & 0xFF) / 255) * percentage, 0, 1) * 255).toString(16),
        blue: Math.round(clamp((((col) & 0xFF) / 255) * percentage, 0, 1) * 255).toString(16),
    }
    var finalColor = {
        r: (modifiedColors.red.length == 1) ? "0" + modifiedColors.red : modifiedColors.red,
        g: (modifiedColors.green.length == 1) ? "0" + modifiedColors.green : modifiedColors.green,
        b: (modifiedColors.blue.length == 1) ? "0" + modifiedColors.blue : modifiedColors.blue,
    }

    return "#" + finalColor.r + finalColor.g + finalColor.b;
}


function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
