//Controller
function TaskController(){

};

TaskController.prototype = {
	bindEvents: function(){
		$(document).on('click', '#complete', this.completeTask.bind(this))
		$(document).on('click', '#complete', this.changeColor.bind(this))
		$(document).on('click', '.archive', this.archiveTask.bind(this))
	},
	changeColor: function(e){
		$(e.currentTarget.parentElement.parentElement.children).css("background-color", "green");
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

