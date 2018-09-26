function jsFigureCover(){
	figure = document.querySelectorAll('figure.cover');
	[].forEach.call(
		document.querySelectorAll('figure.cover'),
		function (fig) {
			var img = fig.querySelector('img');
			var figw = fig.offsetWidth;
			var figh = fig.offsetHeight;
			var type = '';
			if (figw > figh) {
				type = 'hzt'
			}
			else{
				type = 'vtc'
			}
			var ratio = fig.getAttribute("ratio");
			var newh = 0;
			var theratio = ratio.split("-");
			newh = figw*(theratio[1]/theratio[0]);
			img.style.width = figw+"px";
			img.style.height = newh+"px";

		});
}
setTimeout(function(){
	jsFigureCover();
},1000);
window.onscroll = function() {
	jsFigureCover();
};
jsFigureCover();