function play(){
	var randomNum1 = Math.floor(Math.random() * 6) + 1;
	var randomNum2 = Math.floor(Math.random() * 6) + 1;

	var p1 = "images/dice"+ randomNum1 +".png";
	var p2 = "images/dice"+ randomNum2 +".png";

	document.querySelector(".img1").setAttribute("src" , p1);
	document.querySelector(".img2").setAttribute("src" , p2);

	if (p1 > p2) {
		document.querySelector("h1").innerHTML = "🚩Player 1 won";
	} else if (p1 < p2) {
		document.querySelector("h1").innerHTML = "Player 2 won🚩";
	} else {
		document.querySelector("h1").innerHTML = "Draw";
	}
}
