//Javascript Function created by Allan Beldan
//Referred to in the Services.html page

function CalculateCost() {
		var cbRunnerTread = Number(document.querySelector('[name="cbRunnerTread"]:checked')),
		    cbWindsShield = Number(document.querySelector('[name="cbWindshield"]:checked')),
		    cbJetEngine = Number(document.querySelector('[name="cbJetEngine"]:checked')),
		    cbReader = Number(document.querySelector('[name="cbReader"]:checked')),
		    cbGPS = Number(document.querySelector('[name="cbGPS"]:checked')),
		    cbHotChocolate = Number(document.querySelector('[name="cbHotChocolate"]:checked')),
		    cbSeatCover = Number(document.querySelector('[name="cbSeatCover"]:checked')),
		    cbHeatedSeat = Number(document.querySelector('[name="cbHeatedSeat"]:checked')); // Pass checkboxes as per https://stackoverflow.com/questions/42266456/how-to-pass-checkbox-value-to-javascript-function
		    
		    if (Number.isNaN(cbRunnerTread) == true) {cbRunnerTread = 1;} //Convert NaN values to 1
		    if (Number.isNaN(cbWindsShield) == true) {cbWindsShield = 1;}
		    if (Number.isNaN(cbJetEngine) == true) {cbJetEngine = 1;}
		    if (Number.isNaN(cbReader) == true) {cbReader = 1;}
		    if (Number.isNaN(cbGPS) == true) {cbGPS = 1;}
		    if (Number.isNaN(cbHotChocolate) == true) {cbHotChocolate = 1;}
		    if (Number.isNaN(cbSeatCover) == true) {cbSeatCover = 1;}
		    if (Number.isNaN(cbHeatedSeat) == true) {cbHeatedSeat = 1;}

		var runner = 134.5,
		    windshield = 50.05,
		    booster = 2000,
		    reader = 52.5,
		    gps = 50,
		    chocolate = 15,
		    cover = 9,
		    heated = 11.8; //Cash worth 1, Christmas cake worth 50, Gingerbread houses worth 20, chocolate santa worth 10, milk worth 3, sugar cookies worth 1.5, Candy canes worth 0.5, gumballs worth 0.05, sugar plums worth 0.01
		var totalcost = (runner * cbRunnerTread) + (windshield * cbWindsShield) + (booster * cbJetEngine) + (reader * cbReader) + (gps * cbGPS) + (chocolate * cbHotChocolate) + (cover * cbSeatCover) + (heated * cbHeatedSeat);
		var cash = Math.floor(totalcost/1000);
		totalcost -= (cash * 1000);
		var cake = Math.floor(totalcost/50);
		totalcost -= (cake*50);
		var ginger = Math.floor(totalcost/20);
		totalcost -= (ginger*20);
		var santa = Math.floor(totalcost/10);
		totalcost -= (santa*20);
		var milk = Math.floor(totalcost/3);
		totalcost -= (milk*3);
		var sugar = Math.floor(totalcost/1.5);
		totalcost -= (sugar*1.5);
		var candy = Math.floor(totalcost/0.5);
		totalcost -= (candy*0.5);
		var gumball = Math.floor(totalcost/0.2);
		totalcost -= (gumball*0.05);
		var plum = Math.floor(totalcost/0.01);
		if (cash > 0) {
			var cashout = " $2000, ";}
		else {
			var cashout = "";}
		if (cake > 0) {
			if (cake > 1) {var cakeout = cake + " Christmas Cakes, ";}
			else {var cakeout = cake + " Christmas Cake, ";}}
		else {
			var cakeout = "";}
		if (ginger > 0) {
		if (ginger > 1) {var gingerout = ginger + " Gingerbread Houses, ";}
			else {var gingerout = ginger + " Gingerbread House, ";}}
		else {var gingerout = "";}
		if (santa > 0) {
			if (santa > 1) {var santaout = santa + " Chocolate Santas, ";}
			else {var santaout = santa + " Chocolate Santa, ";}}
		else {
			var santaout = "";}
		if (sugar > 0) {
			if (sugar > 1) {var sugarout = sugar + " Sugar Cookies, ";}
			else {var sugarout = sugar + " Sugar Cookie, ";}}
		else {
			var sugarout = "";}
		if (candy > 0) {
			if (candy > 1) {var candyout = candy + " Candy Canes, ";}
			else {var candyout = candy + " Candy Cane, ";}}
		else {
			var candyout = "";}
		if (milk > 0) {
			if (milk > 1) {var milkout = milk + " Glasses of Milk, ";}
			else {var milkout = milk + " Glass of Milk, ";}}
		else {
			var milkout = "";}
		if (gumball > 0) {
			if (gumball > 1) {var gumballout = gumball + " Gumballs, ";}
			else {var gumballout = gumball + " Gumball, ";}}
		else {
			var gumballout = "";}
		if (plum > 0) {
			if (plum > 1) {var plumout = plum + " Sugar Plums, ";}
			else {var plumout = plum + " Sugar Plum, ";}}
		else {
			var plumout = "";}
		var output = "Your estimated cost, using North Pole Simplified Equivalent Currency is " + cashout + cakeout + gingerout + santaout + sugarout + candyout + milkout + gumballout + plumout + "or equivalent in toys or bulk candy canes";
		if (output == "Your estimated cost, using North Pole Simplified Equivalent Currency is or equivalent in toys or bulk candy canes") {output = "You want no work done? We can do that for free!";}
		$("outputtext") = output;
		}
