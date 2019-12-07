
function GitHubLister(user){
    this.CORS_Endpoint = "https://cors-anywhere.herokuapp.com/"
    this.list = (callback) => {
        if(jQuery){
            var githubUserEndpoint = "https://api.github.com/users/"+user+"/repos";
            var xhr = new XMLHttpRequest();
            xhr.open("GET", this.CORS_Endpoint + githubUserEndpoint, true);
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4 && xhr.status == 200){
                    if(valid(xhr.responseText)){
                        var json = JSON.parse(xhr.responseText);
                        var data = [];
                        for(var i = 0; i < json.length; i++){
          
                            var repoInfo = {
                                name : json[i].name,
                                desc : json[i].description,
                                lang : json[i].language,
                                fork : json[i].fork,
                                url  : json[i].html_url
                            }

                            data.push(repoInfo);
                        }
                        callback(data, "OK", false);
                    }else{
                        console.log("An Error Occured: Expected a JSON response.");
                        callback(null, "An Error Occured: Expected a JSON response.", true);
                    }
                }else if(xhr.readyState == 4 && xhr.status != 200){
                    console.log("An Error Occurred:");
                    console.log(xhr.responseText);
                    callback(null, "A Network Error Has Occured.", true);
                }
            }
            xhr.send();
        }else{
            console.log("This module is intended to be run with jquery.");
            callback(null, "This module is intended to be run with jquery.", true);
        }
    }
}

function valid(string){
    try{
        JSON.parse(string);
        return true;
    }catch(e){
        return false;
    }
}