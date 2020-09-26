

function runSQLOnDataBase(databasename,sql,callback = (error = false, message = "", data = {}) => {}){
    $.post("/sql", {
        key: window.api,
        sql: sql,
        db : databasename
    }, function (data) {
        callback(data.error,data.message,data.payload);
    });
}

function createDataBase(databasename,callback = (error,message) => {}){
    $.post("/server/createdb",{
        key : window.api,
        name : databasename
    },function(data){
        callback(data.error,data.message);
    });
}

function deleteDataBase(databasename,callback = (error,message) => {}){
    $.post("/server/removedb",{
        key : window.api,
        name : databasename
    },function(data){
        callback(data.error,data.message);
    });
}
