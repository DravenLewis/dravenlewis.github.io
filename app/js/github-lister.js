
function GithubLister(user){
    // list all repos by a user
    this.list = function(){
        // this function requires jquery
        // end point to hit
        //http://api.github.com/users/"+user+"/repos
        if(jQuery){
            $.get(
                "https://reqres.in/api/users?page=2",
                function(data){
                    $('body').append("<p>" + JSON.parse(data) + "</p>");
                }
            ).fail(function(){
                // fail
            });
        }else{
            // no jquery
        }
    }
}