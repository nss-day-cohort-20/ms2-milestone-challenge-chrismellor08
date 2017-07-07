

function carsToDOM(_car_inventory){

	_car_inventory.map(function(currentCar){
		console.log(currentCar);
		document.getElementById("card").innerHTML +=
		`<div class="prodCard col-md-4">
		<h2>${currentCar.year}</h2>
		<h2>${currentCar.make}</h2>
		<h2>${currentCar.model}</h2>
		<p id="desc">${currentCar.description}</p>
		<h2>${currentCar.price}</h2>
		</div>`
		if ((cars.length %3) === 0 ){
			document.getElementById("card").innerHTML +=`
			</div>
			<div class="row">`
		}
	})
	listeners();
}
inventory.loadInventory(carsToDOM);

var cars = document.getElementsByClassName("prodCard");
// console.log(cars);
function listeners() {
	for (i=0; i<cars.length; i++){
		cars[i].addEventListener("click", function(){
			for (var x= 0; x<cars.length; x++) {
				cars[x].classList.remove("focusBorder");
			}
			this.classList.toggle("focusBorder");
			input.focus();
			input.value = "";
		})
	};
}

function changeDescription(event) {
	var thingToChange = document.getElementsByClassName("focusBorder")[0];
	if (thingToChange) {
		var newDesc = input.value;
		var descChange = thingToChange.getElementsByTagName("p")[0];
		descChange.innerHTML = newDesc;
	}
	if(event.code === "Enter") {
		input.value = "";
	}

}

input.addEventListener("keyup", changeDescription);

// addRows();
// Loop over your array of cars and build up an HTML string to build a card for each car.
// Also, use Bootstrap to create rows. Each row should contain 3 columns.
// Make sure you have a parent element with a class of container.
// Hint: You must build up the entire string of columns/rows before injecting into the DOM.
// Use a counter variable to know when to close a row after three columns.
//
//
// Make sure you display all properties of the car in the DOM. Basic styling is up to you.
//
//
// Also, on click of the car element, clear the value of the
// text input in the navbar, and put the cursor in the text input.
//
//
// When you start typing into the navbar's text input, the description,
// and only that property, of the currently selected car should be bound
// to what you are typing in and match it exactly.
//
//

// <div class="container">
// <div class="row">
// <div class="col-md-4"></div>


// </div>
// </div>