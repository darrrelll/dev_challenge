

//Controller
function TaskController(){

};

TaskController.prototype = {
	bindEvents: function(){
		$(document).on('click', '#complete', this.completeTask.bind(this))
		$(document).on('click', '.archive', this.archiveTask.bind(this))
	},
	completeTask: function(e){
		task_id = e.currentTarget.value
    	$.ajax({
	      url: '/tasks/'+task_id,
	      data: {"method": "complete"},
	      type: 'PUT'
	    })
	    .done(function(data){
	    })
    },
    archiveTask: function(e){
    	task_id = e.currentTarget.dataset.id
    	$.ajax({
	      url: '/tasks/'+task_id,
	      data: {"method": "archive"},
	      type: 'PUT'
	    })
	    .done(function(data){

	    })
    }
}


// Adding styling for javascript complete color change
function click_complete(id)
{
    var row2Change = document.getElementsByTagName("tr")[id];
    $(row2Change).children().toggleClass("complete-color");
}