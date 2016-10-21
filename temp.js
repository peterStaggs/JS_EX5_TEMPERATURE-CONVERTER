
// Get a reference to the button element in the DOM
var submit = document.getElementById("submit");




// This function should determine which conversion should
// happen based on which radio button is selected.

function checkInput(){
	var input = document.getElementById("input").value;
	if(input) { //this implies a boolean (true)
	determineConverter(input); 
} else {
	console.log('no input')
	alert('no input')
}
}

function toCelsius (input) {
var outputC = (input - 32) / 1.8;
outputToDom (outputC, "C");
}

function toFahrenheit (input) {
var outputF = (input * 1.8) + 32
outputToDom (outputF, "F");

}

function outputToDom (outputTemp, Type) {
	var output = document.getElementById("output");


	//console.log("outputToDom ", outputTemp.toFixed(1), Type) //to fixed rounds down a float to a set index
	 if (Type === "C") {
	   if (outputTemp > 32) {
	 	output.innerHTML = "<div class='red'>" + outputTemp + "</div>";  
	 	} else if (outputTemp < 0) {
	 	output.innerHTML= "<div class='blue'>" + outputTemp + "</div>";
	 	} else { 
	 	output.innerHTML= "<div class='green'>" + outputTemp + "</div>";
	 	} 
	} else {
	 
	 if (Type === "F") {
	   if (outputTemp > 90) {
	 	output.innerHTML = "<div class='red'>" + outputTemp + "</div>";  
	 } else if (outputTemp < 32) {
	 	output.innerHTML= "<div class='blue'>" + outputTemp + "</div>";
	 } else { 
	 	output.innerHTML= "<div class='green'>" + outputTemp + "</div>";
	 
	  }
	}
	 

	}

}

function resetForm () {
	console.log("Reset Form", input); 

}

function determineConverter (input) {
	var  c  = document.getElementById("C")
	var f = document.getElementById("F")
	if (f.checked) {
		toFahrenheit(input); 
		//console.log('f happened');
	}
	else if (c.checked) {
		toCelsius(input);
		//console.log('c happened');
	} else {
		alert("Something is broken");
	}


	}


// Assign a function to be executed when the button is clicked
submit.addEventListener("click", checkInput);



function clear() {
	var clear = document.getElementById("clear");
    document.getElmentById('output').value='';
	}

clear.addEventListener("click");





