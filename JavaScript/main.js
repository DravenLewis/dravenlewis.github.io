$(document).ready(main);
	
	
    


function main(){

    
    //Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scroll_box').fadeIn();
		} else {
			$('.scroll_box').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scroll_box').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    
    // cheki if using IE
    
      function getInternetExplorerVersion(){
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  else if (navigator.appName == 'Netscape')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

if(getInternetExplorerVersion() !== -1){
   window.location = "http://infinitestrikeltd.github.io/unsupported.html";
   
}
    
    
    $('.menuOpen').click(function() {
        $('.menu').animate({
            left: "0px"
        }, 200);
        $('.menuClose').animate({
            left: "0px"
        }, 200);
     });
    $('.menuClose').click(function() {
        $('.menu').animate({
            left: "-256px"
        }, 200);
        $('.menuClose').animate({
            left: "-256px"
        }, 200);
     });
    
    
}