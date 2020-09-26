
function NewUserDialog() {

    this.buttonListener = (data = { username: "", password: "", displayname: "", level: 0 }) => { };

    var shadowbox = $(`<div class = "shadowbox"></div>`);
    shadowbox.css({
        "position": "fixed",
        "top": "0px",
        "left": "0px",
        "z-index": 9999,
        "background": "rgba(0,0,0,0.5)",
        "width": "100%",
        "height": "100%"
    });

    var prototype = $(`
        <div class = "usercreate w3-container w3-white">
            <h1>Create new User</h1>
            <form class = "w3-form">
                <label><h3>Display Name</h3></label>
                <input class = "w3-input" type = "text" id = "displayname"/>
                <label><h3>Username</h3></label>
                <input class = "w3-input" type = "text" id = "username"/>
                <label><h3>Password</h3></label>
                <input class = "w3-input" type = "text" id = "password"/>
                <label><hp>Operator Level</p></label>
                <select id = "level">
                    <option class = "w3-input" value = "0">Administrator</option>
                    <option class = "w3-input" value = "1">Developer</option>
                    <option class = "w3-input" value = "2">User</option>
                </select>
                <hr class = "is-dark-gray"/>
                <input type = "button" id = "send" class = "w3-right w3-button is-forest" value = "Create New User"/>
            </form>
        </div>
    `);

    prototype.css({
        "width": "50%",
        "padding": "20px",
        "position": "fixed",
        "left": "50%",
        "top": "50%",
        "transform": "translate(-50%,-50%)"
    });

    prototype.find("#send").click(() => {
        if (prototype.find("#username").val() == "" ||
            prototype.find("#password").val() == "" ||
            prototype.find("#displayname").val() == "" ||
            prototype.find("#level").val() == undefined) {
            new ISNotification("red", "Please ensure all fields are filled.",SECOND * 5, BOTTOM, true).show();
        } else {
            this.buttonListener({
                username: prototype.find("#username").val(),
                password: prototype.find("#password").val(),
                displayname: prototype.find("#displayname").val(),
                level: parseInt(prototype.find("#level").val())
            });
        }
    });

    shadowbox.append(prototype);


    this.show = function (callback = (data = {}) => { }) {
        $("body").append(shadowbox);

        this.buttonListener = (data = { username: "", password: "", displayname: "", level: 0 }) => {
            callback(data);
            this.remove();
        };
    }

    this.remove = function () {
        $(".shadowbox").remove();
    }
}