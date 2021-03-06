$(document).ready(function() {



	$('.js-addrows').click(function(event) {
		//js-new-select
		$( ".js-new-select:first-child" ).clone().insertBefore( ".js-addrows" ).addClass('col-group js-newrow').show();
		$('.js-newrow .chosen-select1').addClass('chosen-select').removeClass('chosen-select1').chosen({"disable_search_threshold": 15});
		// for (var selector in config) {
		// 	$(selector).chosen(config[selector]).change(function(){ $(this).trigger('chosen:updated') });
		// }
		return false;
	});
	$(document).click(function() {
        $(".js-tooltip").hide();
        //$(".js-popup-comment").hide();
        $(".js-calendar").removeClass("is-active");
        $(".js-date-input").parent().removeClass("is-active");
        $(".js-drop-user-list").fadeOut("fast");
        var text = $(".is-active .js-input-text").text();
		$(".is-active .js-date-input").val(text);
		$(".js-date-input").parent().removeClass("is-active");
		$(".js-calendar").removeClass("is-active");
        $(".button").removeClass("is-active");
    });

	

	//chosen stuff
	var config = {
			'.chosen-select'           : {"disable_search_threshold": 15},
			'.chosen-select-deselect'  : {allow_single_deselect:true},
			'.chosen-select-no-single' : {disable_search_threshold:10},
			'.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
			'.chosen-select-width'     : {width:"95%"}
		}
		for (var selector in config) {
			$(selector).chosen(config[selector]).change(function(){ $(this).trigger('chosen:updated') });
		}
		function add_new_row() {
			if ($(".js-table-row").length > 0) {
				$(".js-add-tr:not(.group__addnote)").bind("click",function(){
					var html = $(this).parents(".js-table-group").find(".js-table-row tr").html();
					if ($(this).parents(".js-table-group").find(".js-table-simple tbody tr").length > 0) {
						var wheretoprepend = $(this).parents(".js-table-group").find(".js-table-simple tbody tr:first-child");
						wheretoprepend.before('<tr>'+html+'</tr>');
						console.log("yes-tr");
						newtr = wheretoprepend.prev();
					}
					else {
						var wheretoprepend = $(this).parents(".js-table-group").find(".js-table-simple tbody");
						$('<tr>'+html+'</tr>').prependTo(wheretoprepend);
						console.log("no-tr");
						newtr = wheretoprepend.find("tr:first");

					}
					//newtr = wheretoprepend.prev();
					alert('adding');
						newtr.find(".js-select").chosen().change(function(){ $(this).trigger('chosen:updated') });
						newtr.find("select[multiple]").multiselect({
							selectedList: 4,
							noneSelectedText: "Select an Option",
							header: ""
						}).multiselectfilter();
					return false;
				});
			}
		}
		add_new_row();

		$('.js-table-simple').on('click', '.icon-delete', function(){
			$(this).closest('tr').remove();
		});
		$('.js-remove-tr').on('click', function(){
			$(this).closest('tr').remove();
		});
		$('.group').on('change', 'h2 input[type=checkbox]', function(){
			$(this).closest('.group').toggleClass('is-inactive-group');

		});


		$(".js-select-multi").multiselect({
				selectedList: 7,
				noneSelectedText: "",
				header: true,
   		 		open: function () {
   		 			$(this).multiselect("widget").find("input[type='search']:first").focus();
   		 			$(this).parents(".footer").find(".chosen-container").removeClass("chosen-with-drop");
   		 		},
   		 		close: function () {
   		 			$(this).multiselect("widget").find("input[type='search']:first").val("");
   		 			$(this).multiselect("widget").find(".ui-multiselect-checkboxes li").removeAttr("style");
   		 		}
 
		}).multiselectfilter();

		$(".js-select-multi.has-top-position#s2").multiselect({
				selectedList: 7,
				noneSelectedText: "",
				header: true,
				position: {
				    my: 'left bottom',
				    at: 'left top'
				},
   		 		open: function () {
   		 			$(this).multiselect("widget").addClass("is-top-position");
   		 			$(this).multiselect("widget").append('<div class="wrap"><button  class="js-uncheck">Cancel</button><button>ok</button></div>');
   		 			$(this).multiselect("widget").find("input[type='search']:first").focus();  
   		 			$(this).parents(".footer").find(".chosen-container").removeClass("chosen-with-drop");
   		 		},
   		 		close: function () {
   		 			$(this).multiselect("widget").removeClass("is-top-position");
   		 			$(this).multiselect("widget").find('.wrap').remove();
   		 			$(this).multiselect("widget").find("input[type='search']:first").val("");
   		 			$(this).multiselect("widget").find(".ui-multiselect-checkboxes li").removeAttr("style");
   		 		}
 
		}).multiselectfilter();

		$(".js-select-multi.has-top-position#s1").multiselect({
				selectedList: 7,
				noneSelectedText: "",
				header: true,
				position: {
				    my: 'left bottom',
				    at: 'left top'
				},
   		 		open: function () {
   		 			$(this).multiselect("widget").addClass("is-top-position");
   		 			$(this).multiselect("widget").append('<div class="wrap"><button  class="js-uncheck">Cancel</button><button>ok</button></div>');
   		 			$(this).multiselect("widget").find("input[type='search']:first").focus();  
   		 			$(this).parents(".footer").find(".chosen-container").removeClass("chosen-with-drop");
   		 		},
   		 		close: function () {
   		 			$(this).multiselect("widget").removeClass("is-top-position");
   		 			$(this).multiselect("widget").find('.wrap').remove();
   		 			$(this).multiselect("widget").find("input[type='search']:first").val("");
   		 			$(this).multiselect("widget").find(".ui-multiselect-checkboxes li").removeAttr("style");
   		 		}
 
		}).multiselectfilter();

		$(".ui-multiselect-menu").on("click",".js-uncheck", function(){
			$(this).parents(".ui-multiselect-menu").find("input").attr("aria-selected","false").removeAttr("checked");
			return false;
		});

		$(".js-select-multi.is-placeholder").each(function () {
			var placeholder = $(this).attr("data-placeholder");
			$(this).multiselect({
				selectedList: 7,
				noneSelectedText: placeholder,
				header: true,
		 		open: function () {
		 			$(this).multiselect("widget").find("input[type='search']:first").focus();
		 		},
		 		close: function () {
		 			$(this).multiselect("widget").find("input[type='search']:first").val("");
		 			$(this).multiselect("widget").find(".ui-multiselect-checkboxes li").removeAttr("style");
		 		}
			}).multiselectfilter();
		})


		// hiding on blur, needs class, is-shown
		mouseOverActiveElement = false;
		$('.group__addnote').click(function () {
			$(this).children('.addnote').addClass('is-dropped').show();
		});
		//mouseOverActiveElement = false;
		$('body').on('mouseenter', '.is-activeelement', function(){
			mouseOverActiveElement = true; 
		});
		$('body').on('mouseleave', '.is-activeelement', function(){
			mouseOverActiveElement = false; 
		});
		$("html").click(function(){ 
		    if (!mouseOverActiveElement) {
		    	$('.is-dropped').hide();
		        //console.log('clicked outside active element');
		    }
		});
		$(".addnote__submit").click(function (e) {
			$('.addnote').hide();
			newtext = $('.addnote').find('textarea').val();
			newhtml = '<tr><td>John Doe</td><td>1970</td><td>'+newtext+'</td><td><a href="#">filename</a></td><td class="td_icon"><div class="icon-delete"></div></td></tr>';
			if ($(".js-table-simple tbody tr").length > 0) {
				var wheretoprepend = $('.js-table-simple tbody tr:first-child');
				wheretoprepend.before(newhtml);
			}
			else {
				var wheretoprepend = $('.js-table-simple tbody');
				wheretoprepend.before();
				$(newhtml).prependTo(wheretoprepend);
			}
			
			$('.addnote').hide();
			return false;
		});


		function fixed_filter() {
			if ($(".js-header").length > 0) {
				var header_height = $(".js-header").outerHeight();
				if ($(window).scrollTop() >= header_height) {
					$("body").addClass("is-fixed-table");
				}
				else {
					$("body").removeClass("is-fixed-table");
				}

			}
			else {
				var filter_pos = $(".js-filter").offset().top;
				if ($(window).scrollTop() >= filter_pos) {
					$("body").addClass("is-fixed-table");
				}
				else {
					$("body").removeClass("is-fixed-table");
				}
				console.log($(window).scrollTop());
				console.log(filter_pos);
			}
			
		}
		if ($(".js-filter").length > 0 ) {
			fixed_filter();
		}
		
		$(window).scroll(function(){
			if ($(".js-filter").length > 0 ) {
			fixed_filter();
		}
		}); 

		function td_width() {
			$(".js-table tr").first().find("td").each(function(i){
				var width = $(this).outerWidth();
				$(this).attr("data-class","td-"+i);
				var class_td = $(this).attr("data-class");
				$("."+class_td).css("width", width-6);
			});
		}
		td_width();

		$(window).resize(function(){
			td_width();
		}); 

		$(".js-table td").on("click", function(){
			if ($(this).attr("data-href") || $(this).attr("data-window-url") || $(this).hasClass("with-checkbox") || $(this).parent().attr("data-href") || $(this).hasClass("has-checkbox")) {
				
			}
			else {
				$(this).parent().toggleClass("is-clicked");
			}
			
		});
		$(".js-clear-select").click(function(){
			$(this).parent().find(".js-select-multi").multiselect("uncheckAll");
			$(this).parent().find(".js-date-input").val("");
			return false;
		});

	var tooltip = $(".js-tooltip");
	tooltip.click(function(event){
		event.stopPropagation();
	});
	function tooltipShow() {
		$(".js-show-tooltip").bind("click", function(event){
			var top = $(this).offset().top;
			var left = $(this).offset().left;
			tooltip.css({
				"left": left-12,
				"top": top+37
			});
			tooltip.show();
			event.stopPropagation();
		});
	}
	if ($(".js-show-tooltip").length > 0) {
		tooltipShow();
	}
	
	$(window).scroll(function(){
		if ($(".js-show-tooltip").length > 0) {
			var top = $(".js-show-tooltip").offset().top;
			var left = $(".js-show-tooltip").offset().left;
			tooltip.css({
				"left": left-12,
				"top": top+37
			});
		}
		
	});


	$(".js-show-expand").bind("click",function(){
		$(".js-expand").toggle();
		return false;
	});

	function openWindow() {
		$(".js-open-window").click(function(){
			var window_url = $(this).attr("data-window-url")
			var window_height = $(this).attr("data-window-height");
			var window_width = $(this).attr("data-window-width");
			myWindow=window.open(window_url,'','width='+window_width+',height='+window_height+'')
	    	myWindow.focus();	
		});
	}
		openWindow();

	function slider_time() {
		$(".js-slider-time").each(function(){
			var date = new Date();
			var current_hours = date.getHours();
			var current_minutes = date.getMinutes();
			var current_time = current_hours*60 + current_minutes;
			$(this).slider({
		      	value: current_time,
		      	min: 0,
		      	max: 1440,
		      	step: 15,
		      	slide: function( event, ui ) {
		      		$(this).find(".ui-slider-handle" ).html("<span></span>");
					var handle = $(this).find(".ui-slider-handle span");
		      		var hours = Math.floor(ui.value/60);
		      		var minutes = Math.floor(ui.value%60);
		      		if (hours <= 9 && minutes <= 9) {
		      			handle.text("0"+hours+':'+"0"+minutes);
		      			$( ".is-active .js-time" ).text("0"+hours+':'+"0"+minutes);
		      		}
		      		if (hours <= 9 && minutes > 9) {
		      			handle.text("0"+hours+':'+minutes);
		      			$( ".is-active .js-time" ).text("0"+hours+':'+minutes);
		      		}
		      		if (hours > 9 && minutes <= 9) {
		      			handle.text(hours+':'+"0"+minutes);
		      			$( ".is-active .js-time" ).text(hours+':'+"0"+minutes);
		      		}
		      		if (hours > 9 && minutes > 9) {
		      			handle.text(hours+':'+minutes);
		      			$( ".is-active .js-time" ).text(hours+':'+minutes);
		      		}
		      		if (hours == 24 ) {
		      			handle.text('23:59');
		      			$( ".js-time" ).text('23:59');
		      		}
	
		      		var text_input = $(".is-active .js-input-text").text();
					$(".is-active .js-date-input").val(text_input);
		      	}
			});


			$(this).find(".ui-slider-handle" ).html("<span></span>");
			var handle = $(this).find(".ui-slider-handle span");
			var date = new Date();
			var hours = date.getHours();
			var minutes = date.getMinutes();
		    if (hours <= 9 && minutes <= 9) {
		      	handle.text("0"+hours+':'+"0"+minutes);
		      	$( ".is-active .js-time" ).text("0"+hours+':'+"0"+minutes);
		    }
		    if (hours <= 9 && minutes > 9) {
		      	handle.text("0"+hours+':'+minutes);
		      	$( ".is-active .js-time" ).text("0"+hours+':'+minutes);
		    }
		    if (hours > 9 && minutes <= 9) {
		      	handle.text(hours+':'+"0"+minutes);
		      	$( ".is-active .js-time" ).text(hours+':'+"0"+minutes);
		    }
		    if (hours > 9 && minutes > 9) {
		      	handle.text(hours+':'+minutes);
		      	$( ".is-active .js-time" ).text(hours+':'+minutes);
		    }
		    if (hours == 24 ) {
		      	handle.text('23:59');
		      	$( ".js-time" ).text('23:59');
		    }
		    var text_input = $(".is-active .js-input-text").text(text_input);
			$(".is-active .js-date-input").val(text_input);
		
		});

  	}
	slider_time();

  	function slider_zone() {
  		var date = new Date();
		var zone = date.getTimezoneOffset()/60;
		if (zone > 0) {
			var zone = zone;
		}
		else {
			var zone = -zone;
		}
		$(".js-slider-zone").each(function(){
			$(this).slider({
		     	value: zone,
		     	min: -12,
		     	max: 14,
		     	step: 1,
		     	slide: function( event, ui ) {
		      		$(this).find(".ui-slider-handle").html("<span></span>");
		      		var handle = $(this).find(".ui-slider-handle span");
		      		if (ui.value > 0) {
		      			if (Math.abs(ui.value) <= 9) {
							handle.text('+0'+ui.value+":00");
		      				$( ".is-active .js-zone" ).text('+0'+ui.value+":00");
		      			}
		      			else {
							handle.text("+"+ui.value+":00");
		      				$( ".is-active .js-zone" ).text("+"+ui.value+":00");
		      			}
		      		}
		      		else {
		      			if (Math.abs(ui.value) <= 9) {
							handle.text('-0'+Math.abs(ui.value)+":00");
		      				$( ".is-active .js-zone" ).text('-0'+Math.abs(ui.value)+":00");
		      			}
		      			else {
							handle.text('-'+Math.abs(ui.value)+":00");
		      				$( ".is-active .js-zone" ).text('-'+Math.abs(ui.value)+":00");
		      			}
		      		}
		        	$( ".is-active .js-zone" ).val(ui.value);
		        	var text_input = $(".is-active .js-input-text").text();
					$(".is-active .js-date-input").val(text_input);
		    	}
		    });
			
			$(this).find(".ui-slider-handle").html("<span></span>");
		     var handle = $(this).find(".ui-slider-handle span");
		    if (zone > 0) {
	      		if (zone <= 9) {
	      			handle.text("+0"+zone+":00");
	      			$( ".is-active .js-zone" ).text("+0"+zone+":00");
	      		}
	      		else {
	      			handle.text("+"+zone+":00");
	      			$( ".is-active .js-zone" ).text("+"+zone+":00");
	      		}
	      	}
	      	else {
	      		if (zone <= 9) {
	      			handle.text("-0"+zone+":00");
	      			$( ".is-active .js-zone" ).text("-0"+zone+":00");
	      		}
	      		else {
	      			handle.text("-"+zone+":00");
	      			$( ".is-active .js-zone" ).text("-"+zone+":00");
	      		}
	      	}
	      	// if (zone == 0) {
	      	// 	handle.text("+00:00");
	      	// 	$( ".is-active .js-zone" ).text("+00:00");
	      	// }
		});
	 
  	}
	slider_zone();


	// function calendar() {
	// 	$(".js-calendar li").bind("click",function(){
	// 		$(this).parent().find("li").removeClass("is-active");
	// 		$(this).addClass("is-active");
	// 		var el = $(this).parent().attr("data-class");
	// 		var id = $(this).text();
	// 		var text = $(this).text();
	// 		$(".is-active").find("."+el).val(id);
	// 		$(".is-active").find("."+el).text(text);

	// 		var text_input = $(".is-active .js-input-text").text();
	// 		$(".is-active .js-date-input").val(text_input);

	// 	});

	// 	$(".js-ok").click(function(){
	// 		var text = $(".is-active .js-input-text").text();
	// 		$(".is-active .js-date-input").val(text);
	// 		$(".js-date-input").parents(".js-with-calendar").removeClass("is-active");
	// 		$(".js-date-input").parents(".js-with-calendar").find(".js-calendar").removeClass("is-active");
	// 		return false;
	// 	});

	// 	$(".calendar__months li").bind("click", function(){
	// 		var id = $(this).attr("data-id");
	// 		var text = $(this).text();
	// 		var el = $(this).parent().attr("data-class");
	// 		$(".is-active").find("."+el).val(id);
	// 		$(".is-active").find("."+el).text(text);
	// 	});	
	// 	var date = new Date();
	// 	var year = date.getFullYear();
	// 	var month_int = (date.getMonth() + 1).toString();
	// 	var day = date.getDate();
	// 	var hours = date.getHours();
	// 	var minutes = date.getMinutes();
	// 	var zone_offset = date.getTimezoneOffset()/60;
	// 	if (zone_offset > 0) {
	// 		var zone = zone_offset;
	// 	}
	// 	else {
	// 		var zone = -zone_offset;
	// 	}

	// 	var month = new Array(12);
	// 	month[0] = "Jan";
	// 	month[1] = "Feb";
	// 	month[2] = "Mar";
	// 	month[3] = "Apr";
	// 	month[4] = "May";
	// 	month[5] = "Jun";
	// 	month[6] = "Jul";
	// 	month[7] = "Aug";
	// 	month[8] = "Sep";
	// 	month[9] = "Oct";
	// 	month[10] = "Nov";
	// 	month[11] = "Dec";

	// 	// write date in string format
	// 	$(".js-calendar .js-year").text(year);
	// 	$(".js-calendar .js-month").text(month[date.getMonth()]);
	// 	$(".js-calendar .js-date").text(day);

	// 	if (zone > 0) {
 //      		if (zone <= 9) {
 //      			$( ".js-calendar .js-zone" ).text("+0"+zone+":00");
 //      		}
 //      		else {
 //      			$( ".js-calendar .js-zone" ).text("+"+zone+":00");
 //      		}
 //      	}
 //      	else {
 //      		if (zone <= 9) {
 //      			$( ".js-calendar .js-zone" ).text("-0"+zone+":00");
 //      		}
 //      		else {
 //      			$( ".js-calendar .js-zone" ).text("-"+zone+":00");
 //      		}
 //      	}


 //      	if (hours <= 9 && minutes <= 9) {
	//       	$( ".js-calendar .js-time" ).text("0"+hours+':'+"0"+minutes);
	//     }
	//     if (hours <= 9 && minutes > 9) {
	//       	$( ".js-calendar .js-time" ).text("0"+hours+':'+minutes);
	//     }
	//     if (hours > 9 && minutes <= 9) {
	//       	$( ".js-calendar .js-time" ).text(hours+':'+"0"+minutes);
	//     }
	//     if (hours > 9 && minutes > 9) {
	//       	$( ".js-calendar .js-time" ).text(hours+':'+minutes);
	//     }
	//     if (hours == 24 ) {
	//       	$( "js-calendar .js-time" ).text('23:59');
	//     }

	//     // set current date

	//     $(".js-calendar").each(function(){
	//     	var calendar_days = $(this).find(".calendar__days li");
	//     	var calendar_months = $(this).find(".calendar__months li");
	//     	var calendar_years = $(this).find(".calendar__years li");
	// 	    calendar_days.each(function(){
	// 			if ($(this).text() == day) {
	// 				calendar_days.removeClass("is-active");
	// 				$(this).addClass("is-active");
	// 			}
	// 		});
	// 		calendar_months.each(function(){
	// 			if ($(this).attr("data-id") == date.getMonth()) {
	// 				calendar_months.removeClass("is-active");
	// 				$(this).addClass("is-active");
	// 			}
	// 		});
	// 		calendar_years.each(function(){
	// 			if ($(this).text() == year) {
	// 				calendar_years.removeClass("is-active");
	// 				$(this).addClass("is-active");
	// 			}
	// 		});
	//     });
	// }
	// calendar();

	$(".js-date-input").click(function(event){
		$(".js-calendar").removeClass("is-active");
		$(".row__main").removeClass("is-active");
		$(".js-date-input").parent().removeClass("is-active");
		$(this).parents(".js-with-calendar").addClass("is-active");
		$(this).parents(".js-with-calendar").find(".js-calendar").addClass("is-active");
		event.stopPropagation();
	});

	$(".js-calendar").click(function(event) {
		event.stopPropagation();
	});

	$(".js-attach").hide();
	function check_radio() {
		if ($('.js-radio-attach').is(":checked")) {
			$(".js-attach").show();
		}
		else {
			$(".js-attach").hide();
		}
	}
	$(".js-radio-group input[type='radio']").on("change", function(){
		check_radio();
	});
	check_radio();


// -- --------  GFC ---- //

	$(document).click(function() {
        $(".js-item").hide();
        $(".js-show-item").removeClass("is-active");
    });
	$(".js-show-item").click(function(event){
		$(this).parent().find(".js-item").toggle();
		$(this).toggleClass("is-active");
		event.stopPropagation();
	});
	$(".js-item").click(function(event){
		event.stopPropagation();
	})

	function sticky_nav() {
		if ($(".js-nav").length) {
			var top = $(".js-header").height() - $(".js-nav").outerHeight();		
		}
		if ($(window).scrollTop() >= top) {
			$("body").addClass("is-fixed-nav")
		}
		else {
			$("body").removeClass("is-fixed-nav")
		}
	}
	//sticky_nav();
	$(window).scroll(function() {
		//sticky_nav();
	});

	$(".js-show-popup-com").on("click", function(event){
		$(this).parents("tr").find(".js-popup-comment").toggle();
		event.stopPropagation();
	});
	$(".js-popup-comment").on("click", function(event){
		event.stopPropagation();
	});
	$(".js-popup-close").on("click", function(event){
		$(this).parents(".popup").hide();
		event.stopPropagation();
	});
	if ($(".js-date").length) {
		$(".js-date").datetimepicker({
	        dateFormat: 'yy-mm-dd',
	        firstDay: 1,
	        changeMonth: true,
	        changeYear: true,
	        showOtherMonths: true,
	        showTimezone: true,
	        selectOtherMonths: true,
	        yearRange: '-10:+3',
	        showSecond: true,
	        showButtonPanel: false,
	        timeFormat: 'HH:mm:ss z',
	    });
	}
	if ($(".js-date-from").length) {
		$(".js-date-from").datetimepicker({
	        dateFormat: 'yy-mm-dd',
	        firstDay: 1,
	        changeMonth: true,
	        changeYear: true,
	        showOtherMonths: true,
	        //showTimezone: true,
	        selectOtherMonths: true,
	        yearRange: '-10:+3',
	        showSecond: true,
	        showButtonPanel: false,
	        //timeFormat: 'HH:mm:ss z',
	        timeFormat: 'HH:mm:ss',
	        onClose: function( selectedDate ) {
		        $( ".js-date-to" ).datepicker( "option", "minDate", selectedDate );
		    }
	    });
	}
	if ($(".js-date-to").length) {
		$(".js-date-to").datetimepicker({
	        dateFormat: 'yy-mm-dd',
	        firstDay: 1,
	        changeMonth: true,
	        changeYear: true,
	        showOtherMonths: true,
	        //showTimezone: true,
	        selectOtherMonths: true,
	        yearRange: '-10:+3',
	        showSecond: true,
	        showButtonPanel: false,
	        //timeFormat: 'HH:mm:ss z',
	        timeFormat: 'HH:mm:ss',
	        hour: 23,
	        minute: 59,
	        second: 59,
	        onClose: function( selectedDate ) {
		        $( ".js-date-from" ).datepicker( "option", "maxDate", selectedDate );
		    }
	    });
	}
	// if ($(".js-date-zone").length) {
	// 	$(".js-date-zone").datetimepicker({
	//         //dateFormat: 'yy-mm-dd',
	//         firstDay: 1,
	//         changeMonth: false,
	//         changeYear: false,
	//         showOtherMonths: false,
	//         showTimezone: true,
	//         selectOtherMonths: false,
	//         yearRange: '-10:+3',
	//         showSecond: false,
	//         showButtonPanel: false,
	//         timeFormat: 'HH:mm:ss z',
	//         hour: 23,
	//         minute: 59,
	//         second: 59,
	//         onClose: function( selectedDate ) {
	// 	        $( ".js-date-zone" ).datepicker( "option", "maxDate", selectedDate );
	// 	    }
	//     });
	// }
	function tab() {
       $(".js-tab").each(function(){
        	var tab_link = $(this).find("a");
        	var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
        	tab_cont.hide();
        	tab_link.first().addClass("is-active");
        	$(this).parents(".js-tab-group").find(".js-tab1").show();
        	tab_link.on("click", function() {
            	var index = $(this).attr("href");
            	tab_link.removeClass("is-active");
            	$(this).addClass("is-active");
            	tab_cont.hide();
            	$(this).parents(".js-tab-group").find("."+index).show();
            	return false;
          });
       });
  }
  tab();

  $(".js-check-all input").on("change", function(){
  		var group_id = $(this).parent().attr("data-group-id");

  		if ($(this).is(":checked")) {
			//alert("checked");
			$(".customcheckbox").each(function(){
	  			var check_id = $(this).attr("data-id");
	  			if (check_id == group_id) {
	  				$(this).find("input").attr("checked","checked");
	  				$(this).addClass("is-checked");
	  			}
	  		});
		}
		else {
			//alert("unchecked");
			$(".customcheckbox").each(function(){
	  			var check_id = $(this).attr("data-id");
	  			if (check_id == group_id) {
	  				$(this).find("input").removeAttr("checked");
	  				$(this).removeClass("is-checked");
	  			}
	  		});
		}

  });

  $(".customcheckbox input").on("change", function(){
  		if ($(this).parent().hasClass("is-checked")) {  
  			$(this).removeAttr("checked");
			$(this).parent().removeClass("is-checked");
			
		}
		else {
			$(this).attr("checked","checked");
			$(this).parent().addClass("is-checked");
		}
  });

  $(".js-drop-user").on("click", function(event){
  	$(".js-drop-user-list").fadeToggle("fast");
  	event.stopPropagation();
  });
  $(".js-drop-user-list").on("click", function(event){
  	event.stopPropagation();
  });
  $(".ui-multiselect-menu").on("click", function(event){
  	event.stopPropagation();  
  });

});


