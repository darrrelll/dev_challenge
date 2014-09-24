///////////////////////////////////
/////----------Model----------////
function Task(){
}

Task.prototype = {
	completeInDatabase: function(task_id){
		$.ajax({
	      url: '/tasks/'+task_id,
	      data: {"method": "complete"},
	      type: 'PUT'
	    })
	    .done(function(data){
	    	if (data.complete){
	    		alert("Task Completed")
	    	} else if (data.complete === false) {
	    		alert("Task Completion removed")
	    	} else {
	    		alert("Sorry, unsuccessful request")
	    	}
	    })
	},
	archiveInDatabase: function(task_id){
		$.ajax({
	      url: '/tasks/'+task_id,
	      data: {"method": "archive"},
	      type: 'PUT'
	    })
	    .done(function(data){
	    	if (data.archived){
	    		alert("Task Archived")
	    	} else if (data.archived === false) {
	    		alert("Task Unarchived")
	    	} else {
	    		alert("Sorry, unsuccessful request")
	    	}
	    })
	}

}
