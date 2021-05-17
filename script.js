// function draw(){
// 	var canvas = document.querySelector('#canvas');
// 	var context = canvas.getContext('2d');
// 	context.fillStyle = "blue";
// 	context.fillRect (100, 100, 100, 100);
// }



// function draw(){
// 	var canvas = document.querySelector('#canvas');
// 	var context = canvas.getContext('2d');
// 	context.fillStyle = "rgb(255,0,0)";
// 	context.fillRect (50, 50, 100, 100);
// 	context.strokeStyle = "black";
// 	context.strokeRect (100, 100, 100, 100);
// 	context.strokeRect (50, 50, 100, 100);
// }



// function draw(){
// 	var canvas = document.querySelector('#canvas');
// 	var context = canvas.getContext('2d');
// 	context.beginPath();
// 	context.fillStyle = "rgba(255,0,0,0.5)";
// 	for (var i = 0; i < 10; i++){
// 		context.beginPath();
// 		context.arc(100 + 25 * i, 100 + 25 * i, 50, 0, Math.PI * 2, false);
// 		context.fill();
// 	}
// 	context.fill();
// }



// リスト4-7
// function draw(){
// 	var pdata1 = [
// 		[50,100],
// 		[350,100],
// 		[200,300]
// 	];
// 	var pdata2 = [
// 		[50,250],
// 		[350,250],
// 		[200,50]
// 	];
// 	var canvas = document.querySelector('#canvas');
// 	var context = canvas.getContext('2d');
// 	context.strokeStyle = "black";
// 	context.beginPath();
// 	var p = pdata1[0];
// 	context.moveTo(p[0], p[1]);
// 	for (var i = 1; i < pdata1.length; i++){
// 		p = pdata1[i];
// 		context.lineTo(p[0], p[1]);
// 	}
// 	context.closePath();
// 	context.fillStyle = "rgba(0,255,0,0.5)";
// 	context.fill();
// 	context.stroke();
// 	context.beginPath();
// 	var p = pdata2[0];
// 	context.moveTo(p[0], p[1]);
// 	for (var i = 1; i < pdata2.length; i++){
// 		p = pdata2[i];
// 		context.lineTo(p[0], p[1]);
// 	}
// 	context.closePath();
// 	context.fillStyle = "rgba(0,0,255,0.5)";
// 	context.fill();
// 	context.stroke();
// }


function draw(){
	var pdata = [
		[50,100],
		[150,200],
		[150,0],
		[250,100]
	];
	var canvas = document.querySelector('#canvas');
	var context = canvas.getContext('2d');
	context.fillStyle = "#FF9999";
	context.strokeStyle = "blue";
	context.beginPath();
	context.moveTo(pdata[0][0], pdata[0][1]);
	context.bezierCurveTo(
		pdata[1][0],pdata[1][1],pdata[2][0],
		pdata[2][1],pdata[3][0],pdata[3][1]);
	context.stroke();

}
