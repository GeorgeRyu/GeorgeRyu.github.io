
// FUNCTION OF MENU BTN
$('.btn-menu').click(function() {
	var clientWidth = window.innerWidth;

	if(clientWidth > 768) {
		if($('.btn-menu').hasClass('active')) {
			$('.btn-menu').removeClass('active');
			$('.menu-content').removeClass('open-menu');		 
		} else {
			$('.btn-menu').addClass('active');
			$('.menu-content').addClass('open-menu');		 
		}		
	} else {
		if($('.btn-menu').hasClass('active')) {
			$('.btn-menu').removeClass('active');
			$('.menu-content').removeClass('open-menu-sp');		 
		} else {
			$('.btn-menu').addClass('active');
			$('.menu-content').addClass('open-menu-sp');			
		}
	}
});

$('#shortcut-contact').click(function() {
	var clientWidth = window.innerWidth;

	if(clientWidth < 768) {
		$('.btn-menu').removeClass('active');
		$('.menu-content').removeClass('open-menu-sp');		 
	}
});



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
			.from(bgBlack, 1, {x: '-90%', skewX: -40, ease:Power4.easeOut})
			.add('titleWork')
			.from(titleWork, .4, {autoAlpha: 0, x: '-20%', ease:Power2.easeOut}, '-=.6')
			.from(job, .4, {autoAlpha: 0, x: '-20%', ease:Power2.easeOut}, 'titleWork-=.5')
			.to(link, .4, {opacity: 1, x: '20%', ease:Power4.easeIn}, '-=.4')
			.from(workPic, .6, {top: '-5%', autoAlpha: 0, ease:Power2.easeOut}, '-=.2');
	} else {
		tl
			.from(bgBlack, 1, {x: '-90%', skewX: -40, ease:Power4.easeOut})
			.add('titleWork')
			.from(titleWork, .4, {autoAlpha: 0, x: '-20%', ease:Power2.easeOut}, '-=.6')
			.from(job, .4, {autoAlpha: 0, x: '-20%', ease:Power2.easeOut}, 'titleWork-=.5')
			.to(link, .4, {opacity: 1, ease:Power1.easeOut}, '-=.4')
			.from(workPic, 1, {autoAlpha: 0, ease:Circ}, 'titleWork');				
	}