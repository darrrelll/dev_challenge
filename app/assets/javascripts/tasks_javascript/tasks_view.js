/////////////////////////////////////
///////---------View----------//////
function View(){
}

View.prototype = {
	drawColor: function(e){
		$(e.currentTarget.parentElement.parentElement.children).css("background-color", "green");
	}
}

