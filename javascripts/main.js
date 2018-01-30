

// LOADING ANIMATION


//  scroll animation in the page
$(function() {
  // スクロールのオフセット値
  var offsetY = 200;
  // スクロールにかかる時間
  var time = 500;

  // ページ内リンクのみを取得
  $('a[href^=#]').click(function() {
    // 移動先となる要素を取得
    var target = $(this.hash);
    if (!target.length) return ;
    // 移動先となる値
    var targetY = target.offset().top+offsetY;
    // スクロールアニメーション
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    // ハッシュ書き換えとく
    window.history.pushState(null, null, this.hash);
    // デフォルトの処理はキャンセル
    return false;
  });
});



// SCROLL MAGIC
	var controller = new ScrollMagic.Controller();


// LOGO ANIMATION EXCEPT FRONT PAGE
$(window).on('load',function(){
  var url = location.href
  if (!(url == "file:///Users/ryutakahashi/Documents/Portfolio/mysite/GeorgeRyu.github.io/index.html")){

    var gauge = $('#gauge');
		tl = new TimelineLite({paused: false}),

	tl
		.to(gauge, .6, {height: 0, ease:Power2.easeOut}, '+=.6');
  }
});


// FOOTER ANIMATION
	var footerContent = new ScrollMagic.Scene({
		triggerElement: 'footer',
		triggerHook: 0.8
	}).on('start', function () {

		var logoSvg = $('.logo-bottom svg'),
			wrapGauge = $('.wrap-gauge'),
			logoGauge = $('#gauge-2'),
			li = $('.contact-links li'),
			tl = new TimelineLite();

		tl
			.add('logoSvg')
			.to(logoSvg, .4, {y: 0, ease:Power2.easeIn})
			.to(wrapGauge, .4, {y: 0, ease:Power2.easeIn}, 'logoSvg')
			.to(logoGauge, .6, {height: 0, ease:Power3.easeIn})
			.staggerTo(li, .2, {y: 0, ease: Power2.easeOut}, 0.1);
	})
	// .addIndicators({
	// 	name: 'contactTitle',
	// 	colorTrigger: 'black',
	// 	colorStart: '#75c695',
	// 	colorEnd: 'pink'
	// })
			.addTo(controller);


// OPENING ANIMATION OF WORK PAGE
	var	bgBlack = $('.bg-black'),
		titleWork = $('#title-work'),
		job = $('.job'),
		workPic = $('.area-mainimg'),
		link = $('.link'),
		tl = new TimelineLite(),
		clientWidth = window.innerWidth;

	if(clientWidth > 768) {
		tl
			.from(bgBlack, 1, {x: '-90%', skewX: -40, ease:Power4.easeOut}, '+=.3')
			.add('titleWork')
			.to(titleWork, .4, {autoAlpha: 1, x: 0, ease:Power2.easeOut}, '-=.6')
			.to(job, .4, {autoAlpha: 1, x: 0, ease:Power2.easeOut}, 'titleWork-=.5')
			.to(link, .4, {opacity: 1, x: '20%', ease:Power4.easeIn}, '-=.4')
			.to(workPic, .6, {top: 0, autoAlpha: 1, ease:Power2.easeOut}, '-=.2');
	} else {
		tl
			.from(bgBlack, 1, {x: '-90%', skewX: -40, ease:Power4.easeOut}, '+=.3')
			.add('titleWork')
			.to(titleWork, .4, {autoAlpha: 1, x: 0, ease:Power2.easeOut}, '-=.6')
			.to(job, .4, {autoAlpha: 1, x: 0, ease:Power2.easeOut}, 'titleWork-=.5')
			.to(link, .4, {opacity: 1, ease:Power1.easeOut}, '-=.4')
			.from(workPic, 1, {autoAlpha: 0, ease:Circ}, 'titleWork');
	}


// STRETCH TITLE UNDER BORDER IN WORK PAGE
	var stretchWork1 = new ScrollMagic.Scene({
		triggerElement: '#title-work-1',
		triggerHook:0.8
	})
	.setClassToggle('#title-work-1', 'fade-in-title-s')
	.addTo(controller);

	var stretchWork2 = new ScrollMagic.Scene({
		triggerElement: '#title-work-2',
		triggerHook:0.8
	})
	.setClassToggle('#title-work-2', 'fade-in-title-s')
	.addTo(controller);

	var stretchWork3 = new ScrollMagic.Scene({
		triggerElement: '#title-work-3',
		triggerHook:0.8
	})
	.setClassToggle('#title-work-3', 'fade-in-title-s')
	.addTo(controller);

	var stretchWork4 = new ScrollMagic.Scene({
		triggerElement: '#title-work-4',
		triggerHook:0.8
	})
	.setClassToggle('#title-work-4', 'fade-in-title-s')
	.addTo(controller);


// EACH PARAGRAPH ANIMATION IN WORK PAGE
$('.para-part').each(function() {

  var paragraphFadeIn = new ScrollMagic.Scene({
    triggerElement: this.children[0], //This "this.children[]" is important
    triggerHook:0.8
  })
  .setClassToggle(this, 'fade-in-para') // add class to project01
  // .addIndicators({
  //   name: 'fade scene',
  //   colorTrigger: 'black',
  //   colorStart: '#75C695',
  //   colorEnd: 'pink'
  // })
  .addTo(controller);
});


var paragraphFadeIn = new ScrollMagic.Scene({
  triggerElement: '.front-page', 
  triggerHook:0.6
})
.setClassToggle('.front-page', 'fp-fadein') // add class to project01
// .addIndicators({
//   name: 'fade scene',
//   colorTrigger: 'black',
//   colorStart: '#75C695',
//   colorEnd: 'pink'
// })
.addTo(controller);


var paragraphFadeIn = new ScrollMagic.Scene({
  triggerElement: '.sp-site',
  triggerHook:0.6
})
.setClassToggle('.sp-site', 'ss-fadein') // add class to project01
// .addIndicators({
//   name: 'fade scene',
//   colorTrigger: 'black',
//   colorStart: '#75C695',
//   colorEnd: 'pink'
// })
.addTo(controller);



// FADEMOVE
$(function(){
    $('body').fadeMover();
});
