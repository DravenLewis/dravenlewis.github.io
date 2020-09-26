
function getUrlQuery(queryString){
    queryString = queryString.replace("?","");
    var queryDict = [];
    var queryEntry = queryString.split("&");
    for(var i = 0; i < queryEntry.length; i++){
        queryDict[queryEntry[i].split("=")[0]] = queryEntry[i].split("=")[1];
    }
    return queryDict;
}