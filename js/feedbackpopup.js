$(document).ready(function(){
	
	//$('.overlay-popup').draggable(); //display your popup
	
	$(document).keyup(function(e) {
	  
	  // ESC key
	  if (e.keyCode == 27) { 
		isPopupOpen=false;
		  $('.overlay-bg').hide(); 
		  $('input:visible:enabled:first').focus();
		  //alert('pageCount ' + count + ' programmeStr.length ' + programmeStr.length);
		 if(count == programmeStr.length-1){
			closePopup();
		 }
		 
	  } 
	});

    // hide popup when user clicks on close button
    $('.close-btn').click(function(){
		closePopup();
    });
	
	function closePopup(){
		isPopupOpen=false;
		if(close_flag)
		{
			window.open('', '_self', ''); 
			window.close();
		}
		$('input:visible:enabled:first').focus();
    	$('.overlay-bg').hide(); // hide the overlay
	}

    // hides the popup if user clicks anywhere outside the container
    $('.overlay-bg').click(function(){
    	//$('.overlay-bg').hide();
		
    })
    // prevents the overlay from closing if user clicks inside the popup overlay
    $('.overlay-content').click(function(){
		return false;
	});

	
});$(document).ready(function(){
	
	//$('.overlay-popup').draggable(); //display your popup

    // hide popup when user clicks on close button
    $('.close-btn').click(function(){
		if(close_flag)
		{
			window.open('', '_self', ''); 
			window.close();
		}
		$('input:visible:enabled:first').focus();
    	$('.overlay-bg').hide(); // hide the overlay
		
    });

    // hides the popup if user clicks anywhere outside the container
    $('.overlay-bg').click(function(){
    	//$('.overlay-bg').hide();
		
    })
    // prevents the overlay from closing if user clicks inside the popup overlay
    $('.overlay-content').click(function(){
		return false;
	});

	
});