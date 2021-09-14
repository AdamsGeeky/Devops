var close_flag="";
var isPopupOpen;
var count=0;
(function(){
	
	var lines;
	var leftIndentOffset= 50;
	var attempted=[];
	
	var codeTag="";
	var inputVal="";
	var incorrectFB="";
	
	
	$.fn.NotepadWidget = function(){
		init();
	}
	
	function init(){
		$('#activity').empty();
		lines=programmeStr.length;
		
		populateInputs();
	}
	
	function populateInputs(){
	
		var inputTag="";
		var w=0;
		
		codeTag = '<div><span style="" id="span_'+count+'" class="cmdtext" >' + String(programmeStr[count][0]) + '</span>';
		
		if(String(programmeStr[count][2])=="write"){
			if(String(programmeStr[count][4])=="password"){
				inputTag = codeTag + '<input id='+count+' class="userInput" type="password" name="value" value="" maxlength=""/></div>'
			}else{
				inputTag = codeTag + '<input id='+count+' class="userInput" type="text" name="value" value="" maxlength="" /></div>'
			}
			
		}else{
			inputTag= codeTag + '</div>';
		}
		
		$(inputTag).appendTo($('#activity'));
		
		
		if(String(programmeStr[count][2])=="write"){
			w = $('input').width()-$('#span_0').width();
			//alert('w '+ w);
			$('input').css('width',w+'px'); 
			if(count==0){
				$('input').eq(0).focus();
			}
			bindInputEvent();
		}
		
		// It will be last statement of the programme to display on screen.
		if(String(programmeStr[count][2])==""){
			
			// scrolldown 
			$(".userInput").remove();
			$('#activity').animate({scrollTop: 65000}, 1500);

				setTimeout(function() 
				{
					var fbtext='You have successfully completed the assigned task.'
					close_flag=true;
					showFeedback(true,fbtext);
				}, 1500);
		}
		
		
			
	}
	function bindInputEvent(){
	
		if(!isPopupOpen){
				$('input').eq(0).focus();
			}
		// Event to handle Enter key event.
		$(".userInput").keypress(function(event) {
		
				if(event.keyCode == 13) { 
				
				inputVal = $.trim($(this).val());
				correctVal = String(programmeStr[count][1]);
				//inputVal = inputVal.toLowerCase();
				
					var val1="";
					if(inputVal == correctVal){
						val1 = $("#span_"+count).html();
						$("#span_"+count).html(val1 + inputVal);
						$(this).remove();
						
						// show feedback on completed 1st command.
						if(String(programmeStr[count][4]).length>0){
								showFeedback(true,programmeStr[count][4]);
						}
						count++;
						populateInputs();
					}else
					{
						$(this).css({'border':'0px solid red'});
						$('input').val('');
						$('input').css('color','#fff');
						incorrectFB=String(programmeStr[count][3]);
						showFeedback(false,incorrectFB);
					}
				
				}
		});
	}
	
	
	// Show feedback popup
	function showFeedback(flag,fbStr){
		isPopupOpen=true;
		$("input").blur();
		
		if(flag){
			// Set correct feedback text and their style;
					updateFeedbackPosition();
					$('.overlay-bg').show(); 
		}
		else{
			// Set incorrect feedback text and their style;
			
			// Set delay to show popup 
			setTimeout(function() 
				{
					//display your popup
					updateFeedbackPosition();
					$('.overlay-bg').show(); 
				}, 100);
		}
		
		// Put content in feedback popup.
		$('.overlay-content').html(fbStr);
						
	}
	
	function updateFeedbackPosition(){
		var parentW = $('.overlay-bg').width();
		var parentH = $('.overlay-bg').height();
		
		var childW = $('.overlay-popup').width();
		var childH = $('.overlay-popup').height();
		
		var topPos =  (parentH/2-childH/2);
		var leftPos =  (parentW/2-childW/2);
		$('.overlay-popup').css({'top':topPos-30});
		$('.overlay-popup').css({'left':leftPos});
	}
	
}(jQuery));