

function update() {
	ctx.fillStyle = "rgba(255, 255, 255, 1)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// draw a rotating square
	ctx.fillStyle = "rgba(0, 0, 0, 1)";
	ctx.translate(canvas.width/2, canvas.height/2);
	ctx.rotate(upc*0.03); // upc = updates count, used here as a delta time
	ctx.fillRect(-50, -50, 100, 100);
	ctx.rotate(-upc*0.03);
	ctx.translate(-canvas.width/2, -canvas.height/2);

	// draw a rotating triangle
	let h = 30*Math.sqrt(3)
	ctx.fillStyle = "rgba(256, 256, 256, 1)";
	ctx.translate(canvas.width/2, canvas.height/2);
	ctx.rotate(upc*0.06);
	ctx.beginPath();
	ctx.moveTo(0, -h + h/3);
	ctx.lineTo(-30, h/3);
	ctx.lineTo(30, h/3);
	ctx.fill();
	ctx.rotate(-upc*0.06);
	ctx.translate(-canvas.width/2, -canvas.height/2);

}
