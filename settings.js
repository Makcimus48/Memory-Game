var gameIterator
var hearts
var currentIterator
var curentMatrix
var winArr
var copyWin
var level
var hard = false

function startGame(gI, hrt, lvl){
	if(lvl == "hard"){ hard = true;}
	else {hard = false;}
	gameIterator = gI;
	hearts = hrt;
	level = lvl
	winArr = []
	var startMatrix = 3; // Start matrix
	currentIterator = 0;
	curentMatrix = startMatrix;
	lf = document.getElementById('life');
	dv = document.createElement("div");
	dv.setAttribute("id","rem");
	for(var i = 0; i < hearts; i++){
		heart = document.createElement("div");
		heart.innerHTML = '&#10084;';
		heart.setAttribute("class","heart");
		dv.appendChild(heart);
	}
	lf.appendChild(dv);
	setTimeout(createMatrix, 750);
}

function createMatrix(){
	table =  document.createElement("table");
	table.setAttribute("id", "zone");
	table.setAttribute("style", "display: hidden;");
	for(var i = 0; i < curentMatrix; i++){
		row = document.createElement("tr");
		for(var j = 0; j < curentMatrix; j++){
			cell = document.createElement("td");
			var art = 64 / curentMatrix;
			cell.setAttribute("style","width: "+art+"vh; height: "+art+"vh;" );
			box = document.createElement("div");
			box.setAttribute("class", "box");
			box.setAttribute("id", i * curentMatrix +j);
			cell.appendChild(box);
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	var element = document.getElementById("plate");
	element.appendChild(table);
	createWinArr()
}
function checkClick(){
	if(winArr.indexOf( +this.id ) != -1){
		this.classList.add("winCell");
		this.removeEventListener( "click" , checkClick);
		copyWin.splice(copyWin.indexOf( +this.id ), 1);
		if(copyWin.length == 0) {
			currentIterator++;
			setTimeout(removeMatrix, 300);
		}
	}
	else{
		for(var l = 0; l < winArr.length; l++)
		{
			document.getElementById(winArr[l]).classList.add("defCell");
		}
		heatrs = document.getElementsByClassName('heart');
		this.classList.add("wrongCell");
		if(heatrs.length != 1){
			heatrs[heatrs.length - 1].classList.add("defHeart");
			heatrs[heatrs.length - 1].classList.remove("heart");
			winArr = [];
			setTimeout(removeMatrix, 450);
		}
		else{
			heatrs[heatrs.length - 1].classList.add("defHeart");
			heatrs[heatrs.length - 1].classList.remove("heart");
			elem = document.getElementById("zone");
			parent = document.getElementById("plate");
			setTimeout(function(){
				parent.removeChild(elem);
				elem = document.getElementById("rem");
				parent = document.getElementById("life");
				parent.removeChild(elem);
				swal("Oops...", "Try once more...", "error");
				menu.style.display = "block";
			},650);
		}
	}
}

function rotateD(){
	var k = -180;
	if(Math.floor(Math.random() * 5)>2) k *= -1;
	if(Math.floor(Math.random() * 5)>2)
	{
		zone.style.transform = "rotateY("+k+"deg)";
	}
	else
	{
		zone.style.transform = "rotateX("+k+"deg)";
	}
	if(Math.floor(Math.random() * 5)>3){
		setTimeout(rotate, 2500);
	}
}
function rotate(){
	var k = -90;
	if(Math.floor(Math.random() * 5)>2) k *= -1;
	t = Math.floor(Math.random() * 3);
	k = k * t;
	zone.style.transition = 1.5 * t+"s";
	if(Math.floor(Math.random() * 5)>2)
	{
		zone.style.transform = "rotate("+k+"deg)";
	}
	else
	{
		zone.style.transform = "rotate("+k+"deg)";
	}
	if(Math.floor(Math.random() * 5)>3){
		setTimeout(rotateD, t*1500);
	}
}


function removeMatrix(){
	elem = document.getElementById("zone");
	parent = document.getElementById("plate");
	parent.removeChild(elem);
	if(currentIterator == 3){
		curentMatrix++;
	}
	if(currentIterator == 5){
		curentMatrix++;
	}
	if(currentIterator == 9){
		curentMatrix++;
	}
	if(currentIterator < gameIterator) setTimeout(createMatrix, 500)
	else{
		elem = document.getElementById("rem");
		parent = document.getElementById("life");
		parent.removeChild(elem);
		showAnswer()
	};
}

function showAnswer(){
	if(level == "Avalon") level = "Poseidon";
	if(level == "Hogwarts") level = "Aphrodite";
	if(level == "Smeshariki") level = "Aid";
	swal("Good job!", "You key word is: " + level, "success").then(() => {
  	menu.style.display = "block";
});;
}

function createWinArr(){
	count = curentMatrix * curentMatrix;
	if (currentIterator < 5){
		cntArr = Math.trunc(count * 0.25) + currentIterator % 3;
	}
	else{
		cntArr = Math.trunc(count * 0.2) + currentIterator % 4;
	}
	while(cntArr >= 0){
		var k = Math.floor(Math.random() * count); 
		if(winArr.indexOf( k ) == -1){
			winArr.push(k);
			cntArr -= 1;
		}
	}
	copyWin = winArr
	showWin()
}

function showWin(){
	elems = document.getElementsByClassName("box");
	arr = []
	for(var i = 0; i < elems.length; i++){
		if(winArr.indexOf( i ) != -1){
			elems[i].classList.add("winCell");
			arr.push(i);
		}
	}
	zone.style.display = 'show';
	setTimeout(function() {
		for(var j = 0; j < arr.length; j++){
			elems[arr[j]].classList.remove("winCell");
		}
		for(var i = 0; i < elems.length; i++){
			elems[i].addEventListener( "click" , checkClick);
		}
		if(hard) {
			if(Math.floor(Math.random() * 5)>2){rotate()}
			else {rotateD()}
		};
	},1000);
	console.log(hard);
}


//startGame();
