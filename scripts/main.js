

function update() {
	ctx.fillStyle = "rgba(255, 255, 255, 1)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// draw a rotating square
	ctx.fillStyle = "rgba(0, 0, 0, 1)";
	ctx.translate(canvas.width/2, canvas.height/2);
	ctx.rotate(upc/100); // upc = updates count, usede here as a delta time
	ctx.fillRect(-50, -50, 100, 100);
	ctx.rotate(-upc/100);
	ctx.translate(-canvas.width/2, -canvas.height/2);

}
