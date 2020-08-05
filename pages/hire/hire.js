$(document).ready(() => {
    fetchList((error, message) => {
        if(!error){
            var json = message;
            var pages = json.pages;
            for(var i = 0; i < pages.length; i++){
                var protoType = $("<div></div>");
                var id = "page-" + Math.floor((Math.random() * 100));
                protoType.addClass("page-link");
                protoType.attr("id",id);
                var inner = $("<div></div>");
                inner.addClass("page-link-inner");
                inner.append("<h3><a href = 'http://dravenlewis.github.io/pages/showcase/"+pages[i].name+".html'>"+pages[i].title+"<a/></h3>");
                inner.append("<p>"+pages[i].desc+"</p>");
                protoType.append(inner);
                $(".content-main").append(protoType);
                applyColorSelector("#" + id, color_combos[Math.floor((Math.random() * color_combos.length + 1))]);
            }
        }
    });
});