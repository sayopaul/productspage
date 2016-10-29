$(document).ready(function(){
	//fades out a product whenever its cancel button is clicked

	$(".cancel").click(function(event){
		event.preventDefault();
		$(this).parent().fadeOut();
	});
	//increments the number of items in the cart when the add to cart button is clicked
	$(".addTo").click(function(){
		
		dis=$("#numCart").text();
		dis ++;
		$("#numCart").text(dis);

	});
	//adds a visible class to the image-box when it is hovered upon
	$(".image-box").mouseover(function(){
		currentDesc = $(this).children(".description");
		currentDesc.addClass("visi");
	});	
	//removes the visible class, thus creating the complete effect
	$(".image-box").mouseleave(function(){
		currentDesc = $(this).children(".description");
		currentDesc.removeClass("visi");
	});

});