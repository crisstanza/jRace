(function() {

	var MAX = 100000000;

	var start, car1, car2;

	function styleLeft(car) {
		var current = car.style.left;
		if (!current) {
			return 0;
		} else {
			return current.replace('px', '');
		}
	}

	function stepRigth(car) {
		setTimeout(
			function() {
				var current = styleLeft(car);
				current = current*1 + 1;
				car.style.left = current + 'px';
				console.log(current)
			}, 0
		);
	}

	function startOnClick(event, sender) {
		var startTime = new Date();
		for (var i = 0 ; i < 100 ; i++) {
			for (var j = 0 ; j < MAX ; j++) {
				var result = sol1(i);
			}
			setTimeout(function() { stepRigth(car1); }, 0);
		}
		var endTime = new Date();
		var diff = endTime.getTime() - startTime.getTime();
		diff /= 1000;
		console.log(diff);
	}

	function initGlobals() {
		start = $('[href="#start"]');
		car1 = $('car-1');
		car2 = $('car-2');
	}

	function initLinks() {
		start.addEventListener('click', function() { startOnClick(event, this); });
	}

	function init() {
		initGlobals();
		initLinks();
	}

	window.addEventListener('load', function() { init(); });

})();
