 var special = 0;
 $('a').click(function(event){
    event.preventDefault(); 
    txt = this.innerText
    // Тут настраиваеться сложность игры
    if(txt == "Avalon"){
    	var gI = 10;
		var hrt = 1;
    }
    if(txt == "Hogwarts"){
    	var gI = 9;
		var hrt = 2;
    }
    if(txt == "Smeshariki"){
    	var gI = 8;
		var hrt = 3;
    }
    setTimeout(function(){menu.style.display = "none";
	startGame(gI,hrt,txt);
	}, 300);
    });

function secret(){
 	special++;
 	if(special> 10){
	 	swal({
		  title: "Are you sure?",
		  text: "This is the most difficult setting game.",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((value) => {
			if(value){
		  menu.style.display = "none";
		  startGame(20,1,"hard");}
		});
 	} 
 };


particlesJS("particles-js", {"particles":{"number":{"value":120,"density":{"enable":true,"value_area":650}},"color":{"value":"#000000"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4.008530152163807,"random":true,"anim":{"enable":false,"speed":14.617389821424212,"size_min":3.248308849205381,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#000000","opacity":0.5692112816072606,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":365.4347455356053,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false});;