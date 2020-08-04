var nav_bar_track_scroll = false;
var dev = false;

// Window handlers
window.onresize = doOnOrientationChange;

// JQuery Handlers
$(document).ready(main);

// On document ready
function main(e){
    makeInitialChanges();
    
    createEventListenters(); // call this to create event listeners

    populateProjectList();
    makeMobileChanges(isMobile());
}

function makeInitialChanges(){
    if(window.pageYOffset > 5){$(".is-nav").addClass("w3-black");}
    $(".age").append(new Date().getFullYear() - 1999);
    if(dev){
        new ISNotification("#FFFF00","This project is in progress, and may not be fully functioning. <span id = 'dismiss' style = 'cursor:pointer;font-weight:bold;textDecoration:underlined;'>Dismiss</span>",-1,BOTTOM).show();
    }else{
        new ISNotification("#FFFFFF","This site does not collect cookies. <span id = 'dismiss' style = 'cursor:pointer;font-weight:bold;textDecoration:underlined;'>Dismiss</span>",-1,BOTTOM).show();
    }
}

function createEventListenters(){
        window.onscroll = function(){
            var yOffset = window.pageYOffset;
            if(yOffset > 5){
                $(".is-nav").addClass("w3-black");
                $(".is-landing-scroll").hide();
            }else{
                $(".is-nav").removeClass("w3-black");
                $(".is-landing-scroll").show();
            }
        };
        $(".is-landing-scroll").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#content-begin").offset().top
            }, 500);
        });

        $(".is-nav-thumb").click(function(){
            if(isMobile()){
                nav_bar_track_scroll = !nav_bar_track_scroll;
                if(nav_bar_track_scroll){
                    $(".is-nav-btn-group").css({'height':'100%'});
                    $(".is-nav-btn-group").css({'background':'black'});
                    if(window.pageYOffset <= 5){
                        $(".is-nav").css({'background':'black'});
                    }
                }else{
                    $(".is-nav-btn-group").css({'background':'rgba(0,0,0,0)'});
                }

                $(".is-nav-btn-group").slideToggle(500,function(){
                    if(!nav_bar_track_scroll){
                        if(window.pageYOffset <= 5){
                            $(".is-nav").css({'background':'rgba(0,0,0,0)'});
                        }
                    }
                });
            }
        });

        $(".ic3").click(function(){
            createMessageBox("The IC3 certification is a global benchmark for basic computer literacy, including operating systems, hardware, software, and networks. The test is administered by Certiport® Accredited by CompITA <span style = \"font-style:italic;font-size:10px;\">  - Wikipedia</span>","IC3 Certification")
        });
        $(".mta").click(function(){
            createMessageBox("Microsoft Technology Associate exams provide professional based certifications on Microsoft products and they provide the fundamentals for Databases, <span style = \"font-style:oblique;\">Development<span> and IT Infrastructure. MTA certification are offered as part of the Microsoft Certified Professional program.<span style = \"font-style:italic;font-size:10px;\">  - Wikipedia</span>","MTA Certification");
        });
}

function makeMobileChanges(isMobile){
    if(isMobile){
        $(".is-nav-btn-group").hide();
        if($(window).width() > $(window).height()){
            $(".is-landing-inner").css({"margin-top":"10%"});
        }else{
            $(".is-landing-inner").css({"margin-top":"40%"});
        }
        $(".is-landing-header").css({"font-size":"18px"});
        $(".is-projects-container").css({"width":"200px","height":"325px"});
        $(".is-projects").addClass("is-projects-mobile");
        $(".certification-container ").addClass("is-projects-mobile");
        $(".is-message-box").addClass("ismb-m");
        $(".is-bubble-container").addClass("is-bubble-container-mobile");
        $(".is-projects").css({'height':'400px'});
        $("h1").css({'font-size':'24px'});

        $(".is-nav-btn-group").click(function(){
            (".is-nav-btn-group").fadeToggle();
            /*$(".is-nav-btn-group").slideToggle(500, () => {
                if(!nav_bar_track_scroll){
                    if(window.pageYOffset <= 5){
                        $(".is-nav").css({'background':'rgba(0,0,0,0)'});
                    }
                }
            });*/
        });

        $(".desk-github").remove();
    }else{
        // changes to be made to mobile widgets if not mobile.
        $(".is-nav-thumb").hide();
        $(".is-projects-sr").hide();
        $(".is-projects-sl").hide();
    }
}

function isMobile(){
    if (window.matchMedia("only screen and (max-width: 760px)").matches) {
        return true;
    }else{
        return false;
    }
}

function doOnOrientationChange(){
    console.log("change");
    makeMobileChanges(isMobile());
}

function populateProjectList(){
    // ON GITHUB
    
    var lister = new GitHubLister("dravenlewis");
    lister.list((data, message, error) => {
        if(!error){

            //$(".is-projects").append("<h3 class = \"desk-github\">From Github</h3>");

            for(var i = 0; i < data.length; i++){

                console.log(data[i]);

                var name = data[i].name || "No Name Found";
                var desc = data[i].desc || "No Description Found";
                var lang = data[i].lang || "None";

                var elementPrototype = "<div class = \"is-projects-container w3-container w3-mobile\"> \
                <a href = "+data[i].url+"><h3>"+name+"</h3></a> <img src = \"https://cdn.iconscout.com/icon/free/png-256/octocat-5-896384.png\">\
                <p>"+desc+"</p><br/><em><p>Language: "+lang+"</p></em></div>";

                if(!data[i].fork){
                    $(".is-projects").append(elementPrototype);
                    $(".loader").remove();
                }
            }
            //

        }else{
            $(".loader").remove();
            $(".is-projects").append("<h1>Error Loading Projects from Github</h1>");
            console.log(message);
        }
    });
}

function createMessageBox(message,title = "Alert!"){
    var template = "\
        <div class = \"is-shadowbox\"> \
            <div class = \"is-message-box "+(isMobile() ? "ismb-m" : "")+"\"> \
            <div class = \"w3-container w3-black\"><h3>"+title+"</h3></div> \
                <h3 class = \"is-message-box-message\">"+message+"</h3> \
                <button class = \"is-message-box-ok\">Ok</button> \
            </div> \
        </div>";

    $("body").append(template);
    if(isMobile()){
        $("body").css({"overflow":"hidden"});
    }

    $(".is-message-box-ok").click(function(){
        $(".is-shadowbox").remove();
        $("body").css({"overflow":"visible"});
    });
}