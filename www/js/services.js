angular.module('mainApp.services', [])
	.factory('Pictures', function (){
			var pictures = [
	    		{ id: 0, src: "https://placeimg.com/230/230/nature" },
	    		{ id: 1, src: "https://placeimg.com/230/230/arch" },
	    		{ id: 2, src: "https://placeimg.com/230/230/people" },
	    		{ id: 3, src: "https://placeimg.com/230/230/tech" }
	  		];

	  		return {
	  			all: function (){
	  				return pictures;
	  			},
	  			get: function(pictureId){
	  				return pictures[pictureId];
	  			}
	  		}
	})
	.factory('Form', function (){
		var notes = [];

		var addNotes = function (note){
			notes.push(note);
	
		}

		var getNotes = function (){
			return notes;
		}

		
		return {
			addNotes: addNotes,
			getNotes: getNotes
		}
	})