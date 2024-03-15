function resize() {
	const width = window.innerWidth / 16 - 2;
	const count = Math.floor(width / 18);
	document.body.style.setProperty("--meme-w", width / count - 2 + "rem");
}

window.addEventListener("load", function(){
	resize();
	window.addEventListener("resize", resize);
});
