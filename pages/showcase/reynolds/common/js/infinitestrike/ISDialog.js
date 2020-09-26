
const TYPE_MESSAGE = 0;
const TYPE_YES_NO = 1;
const TYPE_INPUT = 3;

const OPTION_OK = 3;
const OPTION_NO = 4;

function ISDialog(text, options = { subtitle: undefined, type: TYPE_MESSAGE}) {
    this.buttonListener = (option,value) => {};

    this.generateHandle = function () {
        if (window.jQuery) {
            var shadowBox = $("<div></div>");
            shadowBox.css({
                "position": "fixed",
                "left": "0px",
                "top": "0px",
                "width": "100%",
                "height": "100%",
                "background": "rgba(0,0,0,0.5)",
                "z-index" : "99999"
            });

            var dialog = $(`<div class = "w3-container w3-white"></div>`);
            dialog.css({
                "position": "relative",
                "top": "50%",
                "left": "50%",
                "width": "600px",
                "height": "400px",
                "transform": "translate(-50%,-75%)"
            });

            var title = $(`<h1>${text}</h1>`);
            title.css({
                "text-align": "center"
            });
            dialog.append(title);

            if (options.subtitle != undefined) {
                var subtitle = $(`<h4>${options.subtitle}</h4>`);
                subtitle.css({
                    "marginLeft" : "20px"
                });
                dialog.append(subtitle);
            }

            switch(options.type){
                case TYPE_YES_NO:
                    var yesButton = $(`<button class = "w3-button is-forest"></button`);
                    yesButton.text("Confirm");
                    yesButton.css({
                        "width" : "48%",
                        "position" : "relative",
                        "top" : "50%",
                        "float" : "left"
                    });
                    yesButton.click(() => {
                        this.buttonListener(OPTION_OK,undefined);
                        this.handle.hide();
                    });

                    var noButton = $(`<button class = "w3-button is-red"></button`);
                    noButton.text("Cancel");
                    noButton.css({
                        "width" : "49%",
                        "position" : "relative",
                        "top" : "50%",
                        "float" : "right"
                    });
                    noButton.click(() => {
                        this.buttonListener(OPTION_NO,undefined);
                        this.handle.hide();
                    });

                    dialog.append(yesButton);
                    dialog.append(noButton);
                    break;
                case TYPE_INPUT:

                    var textInput = $(`<input type="text" class= "w3-input">`);

                    var yesButton = $(`<button class = "w3-button is-forest"></button`);
                    yesButton.text("Confirm");
                    yesButton.css({
                        "width" : "48%",
                        "position" : "relative",
                        "top" : "50%",
                        "float" : "left"
                    });
                    yesButton.click(() => {
                        this.buttonListener(OPTION_OK,textInput.val());
                        this.handle.hide();
                    });

                    var noButton = $(`<button class = "w3-button is-red"></button`);
                    noButton.text("Cancel");
                    noButton.css({
                        "width" : "49%",
                        "position" : "relative",
                        "top" : "50%",
                        "float" : "right"
                    });


                    noButton.click(() => {
                        this.buttonListener(OPTION_NO,undefined);
                        this.handle.hide();
                    });

                    dialog.append(yesButton);
                    dialog.append(noButton);
                    dialog.append(textInput);
                    break;
                case TYPE_MESSAGE:
                default:
                    var okButton = $(`<button class = "w3-button is-forest"></button`);
                    okButton.text("OK");
                    okButton.css({
                        "width" : "100%",
                        "position" : "relative",
                        "top" : "50%"
                    });
                    okButton.click(() => {
                        this.handle.hide();
                    });
                    dialog.append(okButton);
                    break;
            }

            shadowBox.append(dialog);
            return shadowBox;
        } else {
            console.log("[ISDialog] This module requires jquery installed, please reference it in your document header.");
            return undefined;
        }
    }
    this.handle = this.generateHandle();

    this.show = function (callback = (option = 0, value = "") => {}) {
        if (this.handle != undefined) {
            $("body").append(this.handle);
            if (callback != undefined) {
                this.buttonListener = (option, value) => {
                    callback(option, value);
                }
            }
            return this.handle;
        }
    }

    this.hide = function () {
        if (this.handle != undefined) {
            this.buttonListener = (option) => {};
            this.handle.remove();
            return this.handle;
        }
    }
}
