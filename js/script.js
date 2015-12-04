$(document).one('pageinit', function(){

//add handler
	$('#submitAdd').on('tap', addRun);

	/*
	 * Add a run 
	*/
		function addRun(){

		//get the values 
		var miles = $('#addMiles').val();
		var date = $('#addDate').val();


		//create run boject 
		var run = {
				date:date,
				miles:parseFloat(miles)
		}
 
		//get current run 
		var runs = getRunsObject();

		//add run to runs array
		runs.push(run);
		alert('Run added');

		//stringify 
		localStorage.setItem('runs', JSON.stringify(runs));

		//redirect
		window.location.href =  'index.html';

		return false;

	}

		/*
		* 
		*/
		function getRunsObject(){

			//set runs array 
			var runs = new Array();
			//get current array from localstorage
			var currentRuns = localStorage.getItem('runs');

			if(currentRuns != null){

					var  runs = JSON.parse(currentRuns);
			}

			//return runs object
			return runs.sort(function(a,b){return new Date(b.date) - new Date(b.date)});

		}

});





