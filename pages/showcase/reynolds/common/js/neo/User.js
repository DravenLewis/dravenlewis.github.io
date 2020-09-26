
const key = window.api;

class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
        this.data = {
            uuid : "",
            username : "",
            displayname : "",
            password : "",
            level : 0,
            active : false
        }
    }

    login(done = (error = false, message = "", data) => {}){
        $.get(`/user/login?key=${key}&username=${this.username}&password=${this.password}`,(data) => {
            this.data = data.payload;
            done(error,message,data);
        });
    }

    logout(done = (error = false, message = "", data) => {}){
        $.get(`/user/logout?key=${key}&uuid=${this.uuid}`,(data) => {
            this.data = {};
            done(data.error,data.message,data.payload);
        });
    }

    get Data(){
        return this.data;
    }
}

function listUsers(done = (error, message, data) => {}){
    $.get(`/user/list?key=${key}`,(data) => {
        done(data.error,data.message,data.payload);
    });
}

function getUsers(uuid, done = (error, message, data) => {}){
    $.get(`/user/get?key=${key}&uuid=${uuid}`,(data) => {
        done(data.error,data.message,data.payload);
    });
}

function getUser(uuid, done = (error,message, user) => {}){
    $.get(`/user/get?key=${key}&uuid=${uuid}`,(data) => {
        var user = new User();
        user.data.uuid = data.payload.uuid;
        user.data.username = data.payload.username;
        user.data.password = data.payload.password;
        user.data.displayname = data.payload.displayname;
        user.data.active = data.payload.active;
        user.data.level = data.payload.level;

        done(data.error,data.message,user);
    });
}

function createUser(username,password,displayname,level, done = (error, message) => {}){
    $.post('/user/create',{
        key : key,
        username : username,
        password : password,
        displayname : displayname,
        level : level
    },(data) => {
        done(data.error,data.message);
    });
}

function updateUser(uuid,vars, done = (error,message) => {}){
    $.post("/user/update",{
        key : key,
        uuid : uuid,
        changes : JSON.stringify(vars)
    },(data) => {
        done(data.error,data.message);
    });
};

function removeUser(uuid,done =(error,message) => {}){
    $.ajax({
        url : "/user/delete",
        method : "POST",
        data : {
            key : key,
            uuid : uuid
        },
        success : (data) => {
            done(data.error,data.message);
        }
    });
}