function parseCookies(cookiestring){
    var cookies = cookiestring.split(";");
    var cookieList = [];
    for(var i = 0; i < cookies.length; i++){
        cookieList[cookies[i].split("=")[0]] = cookies[i].split("=")[1];
    }
    return cookieList; 
}