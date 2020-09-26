
var j = () => { return window.jQuery != undefined }; // checks if jquery;

class ProgressBar {
    constructor(percentage, color, name) {
        this.percentage = percentage;
        this.color = color;
        this.name = name;
        this.prototype = $(`
        <div class = "is-widget-progressbar-outer" id = "${name}">
            <div class = "is-widget-progressbar-inner"></div>
        </div>`);

        this.styleBar(
            this.prototype,
            this.prototype.find(".is-widget-progressbar-inner")
        );
    }

    add(parentElement) {
        $(parentElement).append(this.prototype);
    }

    styleBar(box, bar) {
        box.css({
            "width": "100%", // fill the max container size
            "height": "20px",
            "marginLeft": "auto",
            "marginRight": "auto",
            "padding": "2px",
            "border": `3px solid ${this.color}`,
            "overflow": "hidden"
        });

        bar.css({
            "width": "0%",
            "height": "100%",
            "backgroundColor": this.color,
            "margin": "0px",
            "padding": "0px",
            "overflow": "hidden"
        });
    }

    update(percentage) {
        var c, d;
        if ((c = new String(percentage)).includes(".") && !c.includes("%")) percentage = parseInt(c.split(".")[1]).toFixed(2);
        if ((d = new String(percentage)).includes("%") && !d.includes(".")) percentage = parseInt(c.replace("%", ""));
        this.prototype.find(".is-widget-progressbar-inner").animate({ "width": `${percentage}%` }, 1000);
    }
}