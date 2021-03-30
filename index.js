score=0;
console.log("Doraemon game");
var audio=new Audio("../web/DST.mp3");
var audiogo=new Audio("../web/GO.mp3");
setTimeout(()=>{
	audio.play();
},2000);
audio.play();
document.onkeydown=function(e){
	console.log("Key code is:",e.keyCode)
	if(e.keyCode==38){
		dino=document.querySelector(".dino");
		dino.classList.add("animateDino");
		setTimeout(()=>{
			dino.classList.remove("animateDino")
		},1000);
	}
	else if(e.keyCode==39){
		dino=document.querySelector(".dino");
		dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
		dino.style.left=dinoX+112+"px";
	}
	else if(e.keyCode==37){
		dino=document.querySelector(".dino");
		dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
		dino.style.left=dinoX-112+"px";
	}
}
var a =setInterval(()=>{
	dino=document.querySelector('.dino');
	gameOver=document.querySelector('.gameOver');
	obstacle=document.querySelector('.Obstacle');
	dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
	dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
	
	ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
	oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
	
	offsetX=Number(Math.abs(dx-ox));
	offsetY=Number(Math.abs(dy-oy));
	
	if(offsetX<120 && offsetY<=140){
		gameOver.style.visibility="visible";
		obstacle.classList.remove('obstacleAni');
		audiogo.play();
		setTimeout(()=>{
			audiogo.pause();
			audio.pause();
		},1000);
		clearInterval(a);
	}
	else{
		score=score+1;
		updateScore(score);
		setTimeout(()=>{
			aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
			newDur=aniDur-0.005;
			if(newDur<2.2)
			{
				newDur=2.0;
			};
			obstacle.style.animationDuration=newDur+"s";
		},500);
	}
},200);
function updateScore(score)
{
	scoreCard.innerHTML="Your Score:" + score;
}
