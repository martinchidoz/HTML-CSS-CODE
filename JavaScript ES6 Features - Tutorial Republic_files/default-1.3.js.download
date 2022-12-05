$(document).ready(function(){
	// Active Link
	var link = $("#myNav a");
	var str = location.href.toLowerCase();
	link.each(function(){
		if(str.indexOf(this.href.toLowerCase()) > -1){
			link.removeClass("selected");
			$(this).addClass("selected");
		}
    });
        
    // Toggle Codebox Size
	$(".codebox .box-size i").on("click", function(){
        var pre = $(this).parents(".codebox").find("pre");
        pre.toggleClass("scroll");
        Prism.highlightElement(pre.children("code")[0]);
		$(this).parents(".codebox").find(".code-style .active").trigger("click");
		$(this).parents(".box-size").toggleClass("maximized");
		if($(this).parents(".box-size").hasClass("maximized")){
			$(this).attr("title", "Minimize");
		}
		else{
			$(this).attr("title", "Maximize");
		}
    });

    // Toggle Code Style
	$(".code-style").each(function(){
		$(this).first("span").addClass("active");
	});
	$(".code-style span").click(function(){
		var targetInt = $(this).attr("data-target");
		$(this).siblings().removeClass("active");
		$(this).addClass("active");		
		targetCode = $(this).parents(".codebox").find("pre").eq(targetInt);
		$(this).parents(".codebox").find("pre").not(targetCode).hide();
		targetCode.show();		
        Prism.highlightElement(targetCode.children("code")[0]); // bind prism highlighter
		var currentURL = $(this).parents(".codebox-title").find("a").attr("href");
		var arrURL = currentURL.split("file=");
		var fileURL = arrURL[0] + "file=" + $(this).attr("data-url");
		$(this).parents(".codebox-title").find("a.download-btn, a.try-btn").attr("href", fileURL);
	});

	// Tree Menu
	var allShortHand = $("li.tree ul");
	$(".expand-all").click(function(){
		allShortHand.slideDown();
		$(this).parent().find("li.tree").addClass("expand");
		return false;
	});
	$(".collapse-all").click(function(){
		allShortHand.slideUp();
		$(this).parent().find("li.tree").removeClass("expand");
		return false; 
	});
	if ($("li.tree a").hasClass("selected")){
		$(".selected").parents("ul").show();
		$(".selected").parents("li.tree").addClass("expand");
	}
	$("li.tree .shorthand").click(function(){
		$(this).next("ul").slideToggle();
		$(this).parent("li").toggleClass("expand");
		return false;
    });
    
    // Mobile Optimization
	var allDrop = $(".leftcolumn, .site-search, .social");

	function showDackdrop(){
		if($(allDrop).is(":visible")){
			$(".backdrop").show();
		}
	}
	$(".open-menu").click(function(){
		$(allDrop).not(".leftcolumn").hide();
		$(".backdrop").toggle();
		$(".leftcolumn").toggle();
		showDackdrop();
	});
	$(".open-share").click(function(){
		$(allDrop).not(".social").hide();
		$(".backdrop").toggle();
		$(".social").toggle();
		showDackdrop();
	});
	$(".open-search").click(function(){
		$(allDrop).not(".site-search").hide();
		$(".backdrop").toggle();
		$(".site-search").toggle();
		$(".site-search").find(".search").focus();
		showDackdrop();
	});        
	$(".backdrop").click(function(){
		$(allDrop).hide();
		$(".backdrop").hide();
    });
    
    // Reference by Order
	$(".toggle").click(function(){
		$(".order-by-alphabet, .order-by-category").toggle();
		$(this).text($(this).text() == 'Order by Alphabet' ? 'Order by Category' : 'Order by Alphabet');
    });
    
	// Visibility vs Display Demo
	$(".display-none").click(function(){
		$(this).css("display", "none");
	});
	$(".visibility-hidden").click(function(){
		$(this).css("visibility", "hidden");
	});
	$(".reset-all").click(function(){
		$(".demo-box div").css({"display" : "block", "visibility" : "visible"});
	});
	
	// String Length Calculator
	$(".calculate-button input").click(function(){
		var myStr = $("textarea").val();
		if($(this).hasClass("with-space")){
			var withSpace = myStr.length;
			alert(withSpace);
		}
		else if($(this).hasClass("trimmed-space")){
			var trimmedSpace = $.trim(myStr).length;
			alert(trimmedSpace);
		}
		else if($(this).hasClass("without-space")){
			var withoutSpace = myStr.replace(/ /g,'').length;
			alert(withoutSpace);
		}
	});

	// Canvas Coordinates Demo
	$("#myCanvas").mousemove(function(event){            
		var relX = Math.round(event.pageX - $(this).offset().left);
		var relY = Math.round(event.pageY - $(this).offset().top);
		var relCoords = "(" + relX + "," + relY + ")";
		$(".canvas-coordinates").text(relCoords);
	});
});