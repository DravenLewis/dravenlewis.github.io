var SECOND = 1000;
var FOREVER = -1;

window.isnLastIndex=-1;

function BoundingBox(up,down,left,right){
    this.top = up;
    this.bottom = down;
    this.left = left;
    this.right = right;
};

var DEFAULT = new BoundingBox("auto","auto","auto","auto");
var BOTTOM = new BoundingBox("auto","0px","0px","auto");
var TOP = new BoundingBox("0px","auto","0px","auto");

// Color - Color of the notification
// Text - Content of the notification
// Length - How long to show the notification, if -1 then forever;
function ISNotification(color, text, length,BoundingBox = DEFAULT,isDismissable=true){
    this.color = color;
    this.text = text;
    this.length = length;
    this.isDismissable = isDismissable;
    this.handle=null;
    this.show = function(){

        var instance_index = Math.floor((Math.random() * 100));

        var notification_prototype = "<div style = 'width:100%; height:auto; min-height:64px; background-color:"+color+";color:"+this.calculateTextColor(this.color)+"; font-family:Arial;position:fixed;bottom:"+BoundingBox.bottom+";left:"+BoundingBox.left+";right:"+BoundingBox.right+";top:"+BoundingBox.top+";z-index:10000;' class = 'npt-inernal-"+instance_index+"'> <p>";
        if(this.isDismissable){
            notification_prototype += "<span id = 'dismiss' style = 'cursor:pointer;font-weight:bold;text-decoration:underlined;float:right;'>Dismiss</span>"
        };
        notification_prototype += text + "</p></div>";

        if(window.jQuery){
            $('body').prepend(notification_prototype);
            $(".npt-inernal-"+instance_index+"").css({"padding-top":"1px"});
            $(".npt-inernal-"+instance_index+"").css({"padding-bottom":"1px"});
            $(".npt-inernal-"+instance_index+"").find('p').css({"padding":"10px"});
            $(".npt-inernal-"+instance_index+"").find('#dismiss').click(function(){
                $(".npt-inernal-"+instance_index+"").fadeToggle(function(){
                    $(this).remove();
                });
            });

            if(this.length >= 0){
                setTimeout(function(){
                    $(".npt-inernal-"+instance_index+"").fadeToggle("fast",() => {
                        $(".npt-inernal-"+instance_index+"").remove();
                    });
                },this.length);
            }

            this.handle = ".npt-inernal-"+instance_index+"";
        }else{
            console.log("[ISNotification] This class requires JQuery, please ensure you have it installed.");
        }

        return this;
    }
    this.calculateTextColor = function(){
        var tint = parseInt(this.color.replace("#",""),16); 
        return ((((tint >> 16) & 0xff)*0.299 + ((tint >> 8) & 0xff)*0.587 + ((tint) & 0xff)*0.114) > 186) ? "#000000" : "#FFFFFF";
    }
    this.hide = function(){
        if(this.handle == null || !window.jQuery){
            console.log("[ISNotification] This class requires JQuery, please ensure you have it installed.");
            console.log("[ISNotification] Cannot Close, show() has not been called.");
        }else{
            $(this.handle).remove();
        }
    }
}