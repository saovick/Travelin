

 $(document).ready(function () {
                
				
			    $(".btnrt").on("click", function(){
				
				 $(this).data('clicked',true);
				 
				 if($(".btnow").data('clicked') && $(".btnrt").css({'background-color':'transparent','color':'orange'}) || $(".btnow").css({'background-color':'transparent','color':'orange'}))
				 {
				     $(this).css({'background-color':'orange','color':'#fff'});
					 $(".formroundtrip").css({'display':'block'});
					 $(".formoneway").css({'display':'none'});
					 $(".btnow").css({'background-color':'transparent','color':'orange'});
				    
				 }
				
				});
				$(".btnow").on("click", function(){
				
				 $(this).data('clicked',true);
				 $(this).css({'background-color':'orange','color':'#fff'});
				 if($(".btnrt").data('clicked') && $(".btnrt").css({'background-color':'orange','color':'#fff'}) || $(".btnrt").css({'background-color':'orange','color':'#fff'}))
				 {
				    $(this).css({'background-color':'orange','color':'#fff'});
					$(".formoneway").css({'display':'block'});
					$(".formroundtrip").css({'display':'none'});
				    $(".btnrt").css({'background-color':'transparent','color':'orange'});
					
				 }
				
				});
			    $(".formnumbers > ul > li:first-child").on("click", function(){
				
				 $(this).data('clicked',true);
				 $(this).addClass("active");
				 
				 
				 $(".formnumbers > ul > li:nth-child(2)").removeClass("active");
				 $(".formnumbers > ul > li:nth-child(3)").removeClass("active");
				 $(".formnumbers > ul > li:nth-child(4)").removeClass("active");
				 
				 });
				$(".formnumbers > ul > li:nth-child(2)").on("click", function(){
				
				 $(this).data('clicked',true);
				 
				 $(".formnumbers > ul > li:nth-child(2)").addClass("active");
				 
				 $(".formnumbers > ul > li:first-child").removeClass("active");
				 $(".formnumbers > ul > li:nth-child(3)").removeClass("active");
				 $(".formnumbers > ul > li:nth-child(4)").removeClass("active");
				
				});
				$(".formnumbers > ul > li:nth-child(3)").on("click", function(){
				
				 $(this).data('clicked',true);
				 
				 $(this).addClass("active");
				 $(".formnumbers > ul > li:first-child").removeClass("active");
				 $(".formnumbers > ul > li:nth-child(2)").removeClass("active");
				 $(".formnumbers > ul > li:nth-child(4)").removeClass("active");
				 
				 
				});
				$(".formnumbers > ul > li:nth-child(4)").on("click", function(){
				
				 $(this).data('clicked',true);
				 
				 $(this).addClass("active");
				 $(".formnumbers > ul > li:first-child").removeClass("active");
				 $(".formnumbers > ul > li:nth-child(2)").removeClass("active");
				 $(".formnumbers > ul > li:nth-child(3)").removeClass("active");
				 $(".formoptn").css({'display':'block'});
				 $(".formnumber").css({'display':'none'});
				 
				});
				
				//form-guest number toggling
				
				$(".formgstnum > ul > li:first-child").on("click", function(){
				
				 $(this).data('clicked',true);
				 $(this).addClass("active");
				 
				 
				 $(".formgstnum > ul > li:nth-child(2)").removeClass("active");
				 $(".formgstnum > ul > li:nth-child(3)").removeClass("active");
				 $(".formgstnum > ul > li:nth-child(4)").removeClass("active");
				 
				 });
				$(".formgstnum > ul > li:nth-child(2)").on("click", function(){
				
				 $(this).data('clicked',true);
				 
				 $(".formgstnum > ul > li:nth-child(2)").addClass("active");
				 
				 $(".formgstnum > ul > li:first-child").removeClass("active");
				 $(".formgstnum > ul > li:nth-child(3)").removeClass("active");
				 $(".formgstnum > ul > li:nth-child(4)").removeClass("active");
				
				});
				$(".formgstnum > ul > li:nth-child(3)").on("click", function(){
				
				 $(this).data('clicked',true);
				 
				 $(this).addClass("active");
				 $(".formgstnum > ul > li:first-child").removeClass("active");
				 $(".formgstnum > ul > li:nth-child(2)").removeClass("active");
				 $(".formgstnum > ul > li:nth-child(4)").removeClass("active");
				 
				 
				});
				$(".formgstnum > ul > li:nth-child(4)").on("click", function(){
				
				 $(this).data('clicked',true);
				 
				 $(this).addClass("active");
				 $(".formgstnum > ul > li:first-child").removeClass("active");
				 $(".formgstnum > ul > li:nth-child(2)").removeClass("active");
				 $(".formgstnum > ul > li:nth-child(3)").removeClass("active");
				 $(".formgstoptn").css({'display':'block'});
				 $(".formgstnum").css({'display':'none'});
				 
				});
				
				
				//one way form passenger number toggling
				
				$(".formpasngnum > ul > li:first-child").on("click", function(){
				
				 $(this).data('clicked',true);
				 $(this).addClass("active");
				 
				 
				 $(".formpasngnum > ul > li:nth-child(2)").removeClass("active");
				 $(".formpasngnum > ul > li:nth-child(3)").removeClass("active");
				 $(".formpasngnum > ul > li:nth-child(4)").removeClass("active");
				 
				 });
				$(".formpasngnum > ul > li:nth-child(2)").on("click", function(){
				
				 $(this).data('clicked',true);
				 
				 $(".formpasngnum > ul > li:nth-child(2)").addClass("active");
				 
				 $(".formpasngnum > ul > li:first-child").removeClass("active");
				 $(".formpasngnum > ul > li:nth-child(3)").removeClass("active");
				 $(".formpasngnum > ul > li:nth-child(4)").removeClass("active");
				
				});
				$(".formpasngnum > ul > li:nth-child(3)").on("click", function(){
				
				 $(this).data('clicked',true);
				 
				 $(this).addClass("active");
				 $(".formpasngnum > ul > li:first-child").removeClass("active");
				 $(".formpasngnum > ul > li:nth-child(2)").removeClass("active");
				 $(".formpasngnum > ul > li:nth-child(4)").removeClass("active");
				 
				 
				});
				$(".formpasngnum > ul > li:nth-child(4)").on("click", function(){
				
				 $(this).data('clicked',true);
				 
				 $(this).addClass("active");
				 $(".formpasngnum > ul > li:first-child").removeClass("active");
				 $(".formpasngnum > ul > li:nth-child(2)").removeClass("active");
				 $(".formpasngnum > ul > li:nth-child(3)").removeClass("active");
				 $(".frmpasngr").css({'display':'block'});
				 $(".formpasngnum").css({'display':'none'});
				 
				});
				
			
            });

