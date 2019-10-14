function startSlide(){
	var slidebox = document.querySelectorAll('slidebox');
	var slideboxSize = slidebox.length;
	slide_timeoute = []
	for (var i = 0; i < slideboxSize; i++) {
		var the_slidebox = slidebox[i];
		var slides = the_slidebox.querySelector('slides');
		if (the_slidebox.getAttribute('display') == null) {
			the_slidebox.setAttribute('display','0');
		}
		if (the_slidebox.getAttribute('transition') == null) {
			the_slidebox.setAttribute('transition','1.25');
		}
		var slide_transition = the_slidebox.getAttribute('transition');

		if (the_slidebox.getAttribute('name') == null) {
			the_slidebox.setAttribute('name','the-slide-box-'+i);
		}
		var slide_name = the_slidebox.getAttribute('name');

		if (the_slidebox.getAttribute('ratio') == null) {
			the_slidebox.setAttribute('ratio','16:9');
		}
		var slide_ratio = the_slidebox.getAttribute('ratio');

		if (the_slidebox.getAttribute('nav') == null) {
			the_slidebox.setAttribute('nav','•');
		}

		if (the_slidebox.getAttribute('autospeed') == null) {
			the_slidebox.setAttribute('autospeed',5);
		}
		if (the_slidebox.getAttribute('auto') == null) {
			the_slidebox.setAttribute('auto',0);
		}

		var slide_nav = the_slidebox.getAttribute('nav');
		var slide_width = slide_ratio.split(':')[0];
		var slide_height = slide_ratio.split(':')[1];
		var slide_percent = (slide_height/slide_width)*100;

		var slide = the_slidebox.querySelectorAll('slide');
		var slideSize = slide.length;
		slides.style.width = slideSize+'00%';
		slides.style.transition = 'all '+slide_transition+'s';

		var slide_navbox = the_slidebox.querySelector('slide-nav');		
		for (var j = 0; j < slideSize; j++) {
			var img_src = slide[j].getAttribute('src');
			slide[j].style.backgroundImage = 'url('+img_src+')';
			if (slide[j].getAttribute('type') != 'slidediv') {
				slide[j].style.paddingTop = (slide_percent/slideSize)+'%';
			}
			slide[j].style.width = 100/slideSize+'%';
			slide_navbox.innerHTML = slide_navbox.innerHTML+'<span onclick="slide_display(\''+slide_name+'\','+j+')" active="0">'+slide_nav+'</span>';
		}
		slide_navbox.querySelector('span').setAttribute('active','1');

		var auto = parseInt(the_slidebox.getAttribute('auto'));
		var autospeed = parseInt(the_slidebox.getAttribute('autospeed')*1000);

		var wings = document.createElement("wing");
		the_slidebox.appendChild(wings).setAttribute('side','left');
		the_slidebox.appendChild(wings).setAttribute('onclick','slide_wing(-1,\''+slide_name+'\')');
		var wings = document.createElement("wing");
		the_slidebox.appendChild(wings).setAttribute('side','right');
		the_slidebox.appendChild(wings).setAttribute('onclick','slide_wing(1,\''+slide_name+'\')');
		var wings = document.querySelectorAll('wing');

		if (auto) {
			slide_timeoute[slide_name] = setTimeout(function(){
				the_slidebox.querySelector('wing[side="right"]').click();
			},autospeed)
		}
	}
	window.onload = function(){
		var slides = document.querySelectorAll('slides');
		var wings = document.querySelectorAll("wing");
		for (var k = 0; k < slides.length; k++) {
			document.querySelectorAll("wing[side='left']")[k].style.height = slides[k].offsetHeight+'px';
			document.querySelectorAll("wing[side='right']")[k].style.height = slides[k].offsetHeight+'px';
		}
	}
}
function slide_display(slide_name,n){
	the_slidebox = document.querySelector('slidebox[name="'+slide_name+'"]');
	var auto = parseInt(the_slidebox.getAttribute('auto'));
	var autospeed = parseInt(the_slidebox.getAttribute('autospeed'))*1000;
	if (auto) {
		clearTimeout(slide_timeoute[slide_name]);
		slide_timeoute[slide_name] = setTimeout(function(){
			the_slidebox.querySelector('wing[side="right"]').click();
		},autospeed)
	}
	var slides = document.querySelector('slidebox[name="'+slide_name+'"] slides');
	var slide_total = slides.querySelectorAll('slide').length;
	var slide_value = (100/slide_total)*n;
	slides.style.transform = 'translateX(-'+slide_value+'%)';
	for (var i = 0; i < slide_total; i++) {
		document.querySelectorAll('slidebox[name="'+slide_name+'"] slide-nav span')[i].setAttribute('active','0');
	}
	document.querySelectorAll('slidebox[name="'+slide_name+'"] slide-nav span')[n].setAttribute('active','1');
	the_slidebox.setAttribute('display',n);
}
function slide_wing(x,slide_name){
	var the_slidebox = document.querySelector('slidebox[name="'+slide_name+'"]');
	var slide_total = the_slidebox.querySelectorAll('slide').length;
	var display = parseInt(the_slidebox.getAttribute('display'));
	var display_next = display+x;
	if (display_next==slide_total) {display_next = 0
	}
	if (display_next<0) {display_next = slide_total-1;
	}
	slide_display(slide_name,display_next);
}
startSlide();