let main = document.getElementById('main');
window.onmousemove = function(e){
	main.style.transform="rotateX(-30deg) rotateY("+ e.clientX +"deg)"
}