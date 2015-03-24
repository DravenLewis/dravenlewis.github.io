$(document).ready(function(){



$('#toast_box_closer').click(function(){closePopup();})


//$('#aa').click(function(){toast();alert("click");})



var toast = function(string,mess){
    $('.toast_box_holder').prepend("<div class = 'toast_shadow'></div>");
    $('.toast_box_holder').prepend("<div class = 'toast_box'><div id = 'toast_box_closer'></div><center><h1>"+string+"</h1></center><div id='content_divider'><p>"+mess+"</p></div></div>")
}

var closePopup = function(){
    $('.toast_box').remove();
    $('.toast_shadow').remove();
}



})



