$(document).ready(function(){
	var page_width = $('#table').width();
	var page_height = $('#table').height();
	//dimensions of the table

	function makeGrid(x , y){
		var box_width = page_width/x;
		var box_height = page_height/y;
		for (let i = 0; i < x; i++) {
			for (let j = 0; j < y; j++) {
				$('#table').append('<div class="box"></div>');
			}
		}
		$('.box').width(box_width).height(box_height);

		$('.box').on('dragstart', function(event) { event.preventDefault(); });
		//stop the drag event when one is dragging mouse to paint
		$('.box').bind("contextmenu",function(e){
   			return false;
 		});//stop rightclick menu from popping up when 


	}//makegrid
		

	$('#build').click(function(){
		$('.box').remove();
		let x = $('#length').val();
		let y = $('#width').val();
		makeGrid(x , y);
	});//button event handler



	var ismousedown = false;
	var rightmousedown = false;

	$('#table').on('mousedown' , '.box' , function(event){
		switch(event.which){
			case 1:
				ismousedown = true;
				return ismousedown;
				break;
			case 2:
				break;
			case 3:
				rightmousedown = true;
				return rightmousedown;
		}


	})
	$('#table').on('mouseup' , '.box' , function(){
		ismousedown = false;
		rightmousedown = false;
		return ismousedown;

	})
	$('#table').on('mousemove' , '.box' , function(){
		if (ismousedown) {
			let rangi = $('#color').val();
			$(this).css('background-color' , rangi);
			$(this).css('outline' , rangi);

		}else if(rightmousedown){
			$(this).css('background-color' , '#FFFFFF');
			$(this).css('outline' , '1px solid black');
	}

	})













});//end document.ready()