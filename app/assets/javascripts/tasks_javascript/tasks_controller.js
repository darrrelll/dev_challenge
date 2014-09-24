/////////////////////////////////
/////------Controller-------/////
function TaskController(options){
	this.view = options["view"]
	this.task = options["task"]
};

TaskController.prototype = {
	bindEvents: function(){
		$(document).on('click', '#complete', this.completeTask.bind(this))
		$(document).on('click', '#complete', this.changeColor.bind(this))
		$(document).on('click', '.archive', this.archiveTask.bind(this))
	},
	changeColor: function(e){
		this.view.drawColor(e)
    },
	completeTask: function(e){
		task_id = e.currentTarget.value
 		this.task.completeInDatabase(task_id)  
    },
    archiveTask: function(e){
    	task_id = e.currentTarget.dataset.id
    	this.task.archiveInDatabase(task_id)
    }
}