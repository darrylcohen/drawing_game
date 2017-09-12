setColours();
buildCanvas();
setColour("red");

function setColours() {
	var colours = ["Red", "Green", "Yellow", "Orange", "Pink", "Blue", "Purple", "Grey", "Indigo", "Violet", "Brown", "Black", "Aqua",
			"BlueViolet", "Coral", "Fuchsia","HotPink","White","Orchid","PaleGreen","Thistle","Salmon","SandyBrown","SeaGreen",
			"SlateBlue","GreenYellow","DarkGoldenRod","Lavender", "Grey", "DodgerBlue"];
	for (i=0; i<colours.length; i++) {
		var div = document.createElement("div");
		div.style.width="100px";
		div.style.height="30px";
		div.style.backgroundColor = colours[i];
		div.style.border = "1px solid black";
		div.onclick = function () {setColour(this.style.backgroundColor)};
		document.getElementById("colourChart").appendChild(div);
	}
}
function buildCanvas() {
	for(i=1; i<1500; i++) {
		var div = document.createElement("div");
		div.classname = "sq";
		div.style.width="30px";
		div.style.height="25px";
		div.innerHTML=".";
		div.style.fontSize="20%";
		div.id = "myDiv";
		div.onclick= function () {paint(this)};
		div.ondblclick = function () {erase(this)};
		document.getElementById("container").appendChild(div);
	}
}
function paint(x) {
	x.style.backgroundColor = document.getElementById("currentColour").style.backgroundColor;
}

function erase(x) {
	x.style.backgroundColor = "initial";
}
function setColour (x) {
	document.getElementById("currentColour").style.backgroundColor = x;
}
