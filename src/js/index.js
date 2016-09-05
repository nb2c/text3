document.addEventListener("DOMContentLoaded",function(){
	var desiginWidth =320;
	var html =document.documentElement;
	html.style.fontSize=parseInt(html.clientWidth/desiginWidth*100)+"px";
},false)