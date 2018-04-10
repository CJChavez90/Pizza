function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal,text1);
};	
	
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	getVeg(runningTotal,text1);
};

function getVeg(runningTotal,text1) {
	var VegTotal = 0;
	var selectedVeg = [];
	var vegArray = document.getElementsByClassName("veg");
	for (var e = 0; e < vegArray.length; e++) {
		if (vegArray[e].checked) {
			selectedVeg.push(vegArray[e].value);
			text1 = text1+vegArray[e].value+"<br>";
		}
	}
	var vegCount = selectedVeg.length;
	if (vegCount > 1) {
		vegTotal = (vegCount - 1);
	} else {
		vegTotal = 0;
	}
	runningTotal = (runningTotal + vegTotal);
	getSauce(runningTotal,text1);
};


function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauces");
	for (var a = 0; a < sauceArray.length; a++) {
		if (sauceArray[a].checked) {
			var selectedSauce = sauceArray[a].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	if (selectedSauce === "Marinara Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "White Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "Barbecue Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "No Sauce") {
		sauceTotal = 0;
	}
	runningTotal = (runningTotal + sauceTotal);
	getCrust(runningTotal,text1);
};	

function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crusts");
	for (var u = 0; u < crustArray.length; u++) {
		if (crustArray[u].checked) {
			var selectedCrust = crustArray[u].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else if (selectedCrust === "Spicy Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "House Special Crust") {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	getCheese(runningTotal,text1);
};

function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheeses");
	for (var o = 0; o < cheeseArray.length; o++) {
		if (cheeseArray[o].checked) {
			var selectedCheese = cheeseArray[o].value;
			ext1 = text1+selectedCheese+"<br>";
		}
		
	}
	if (selectedCheese === "Regular") {
		cheeseTotal = 0;
	} else if (selectedCheese === "No Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	}
	runningTotal = (runningTotal + cheeseTotal);
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};


function resetOrder() {
	document.getElementById("cart").style.opacity=0;
};

