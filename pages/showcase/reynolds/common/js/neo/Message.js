

//LIST, CREATE, REMOVE, RESOLVE

function addMessage(title,content,resolved, callback = (error, message) => {}){
    $.post("/message",{
        key : window.api,
        mode : "create",
        title : title,
        content: content,
        resolved : resolved
    },function(data){
        callback(data.error, data.message);
    });
}

function resolveMessage(messageid, resolvedby, callback = (error,message) => {}){
    $.post("/message",{
        key : window.api,
        mode : "resolve",
        messageid : messageid,
        resolvedby : resolvedby
    },function(data){
        callback(data.error, data.message);
    });
}

function removeMessage(messageid,callback = (error,message) => {}){
    $.post("/message",{
        key : window.api,
        mode : "remove",
        messageid : messageid
    },function(data){
        callback(data.error, data.message);
    });
}

function getMessages(callback = (error,message,messages) => {}){
    $.post("/message",{
        key : window.api,
        mode : "list"
    },function(data){
        callback(data.error, data.message,data.payload);
    });
}