var isTop = true;
	var menuIsOpen = false;

	var menuIcon = $('.va_menu_icon');

	var one = $('#one');
	var two = $('#two');
	var three = $('#three');
	var four = $('#four');

	menuIcon.click(function() {
		if (isTop === true) {
			$('#nav').animate({ top: '50%', left: '50%' }, 400);
			$('.content').animate({ opacity: '0' }, 700);
			showBubbles();
			isTop = false;
		} else {
			if (menuIsOpen === false) {
				showBubbles();
			} else {
				hideBubbles();
			}
		}
	});

	function showBubbles() {
		menuIcon.addClass('is-active');

		one.animate({ opacity: '1' }, 10);
		two.animate({ opacity: '1' }, 10);
		three.animate({ opacity: '1' }, 10);
		four.animate({ opacity: '1' }, 10);

		one.animate({ left: '140px' }, 110);
		two.animate({ top: '140px' }, 200);
		one.animate({ left: '130px' }, 100);
		three.animate({ left: '-65px' }, 300);
		two.animate({ top: '130px' }, 210);
		four.animate({ top: '-65px' }, 400);
		three.animate({ left: '-55px' }, 310);
		four.animate({ top: '-55px' }, 400);

		menuIsOpen = true;
	}

	function hideBubbles() {
		menuIcon.removeClass('is-active');

		setTimeout(function() {
			$('#nav').animate({ top: '100px', left: '100px' }, 400);
			$('.content').animate({ opacity: '1' }, 900);
		}, 500);
		four.animate({ top: '-65px' }, 400);
		three.animate({ left: '-65px' }, 300);
		four.animate({ top: '50%' }, 400);
		two.animate({ top: '140px' }, 200);
		three.animate({ left: '50%' }, 310);
		one.animate({ left: '140px' }, 110);
		two.animate({ top: '50%' }, 200);
		one.animate({ left: '50%' }, 110);

		menuIsOpen = false;
		isTop = true
	}

	$('.bubble').click(function() {
		menuIcon.removeClass('is-active');
		hideBubbles();
		setTimeout(function() {
			$('#nav').animate({ top: '100px', left: '100px' }, 400);
		}, 500);
		isTop = true;
	});

	one.click(function() {
		moveToPage('0', '100vw', '-100vw', '-100vw');
	});

	two.click(function() {
		moveToPage('100vw', '0', '-100vw', '-100vw');
	});

	three.click(function() {
		moveToPage('100vw', '100vw', '0', '-100vw');
	});

	four.click(function() {
		moveToPage('100vw', '100vw', '-100vw', '0');
	});

	function moveToPage(firstLeft, secondTop, thirdLeft, fourthTop) {
		$('.first').animate({ left: firstLeft }, 400);
		$('.second').animate({ top: secondTop }, 400);
		$('.third').animate({ left: thirdLeft }, 400);
		$('.fourth').animate({ top: fourthTop }, 400);

		isTop = true;
	}