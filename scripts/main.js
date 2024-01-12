
player = {
	x: 0,
	y: 0,
	vx: 0,
	vy: 0,
}

function update() {
	ctx.fillStyle = "rgba(255, 255, 255, 1)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// movement controls
	if (key["ArrowLeft"] || key["ArrowRight"]) {
		if (key["ArrowLeft"]) {
			player.vx = Math.max(player.vx - 2, -5);
		}
		if (key["ArrowRight"]) {
			player.vx = Math.min(player.vx + 2, 5);
		}
	} else {
		player.vx = player.vx * 0.9;
	}
	if (key["ArrowUp"] || key["ArrowDown"]) {
		if (key["ArrowUp"]) {
			player.vy = Math.max(player.vy - 2, -5);
		}
		if (key["ArrowDown"]) {
			player.vy = Math.min(player.vy + 2, 5);
		}
	} else {
		player.vy = player.vy * 0.9;
	}
	
	// update player position
	player.x += player.vx;
	player.y += player.vy;

	// draw a rotating square
	ctx.fillStyle = "rgba(0, 0, 0, 1)";
	ctx.translate(canvas.width/2+player.x, canvas.height/2+player.y);
	ctx.rotate(upc*0.03); // upc = updates count, used here as a delta time
	ctx.fillRect(-50, -50, 100, 100);
	ctx.rotate(-upc*0.03);

	// draw a rotating triangle
	let h = 30*Math.sqrt(3)
	ctx.fillStyle = "rgba(256, 256, 256, 1)";
	ctx.rotate(upc*0.06);
	ctx.beginPath();
	ctx.moveTo(0, -h + h/3);
	ctx.lineTo(-30, h/3);
	ctx.lineTo(30, h/3);
	ctx.fill();
	ctx.rotate(-upc*0.06);
	ctx.translate(-canvas.width/2-player.x, -canvas.height/2-player.y);

}
