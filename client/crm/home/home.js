
Template.home.rendered = function () {

  $('#particles').particleground({
		minSpeedX: 0.1,
		maxSpeedX: 0.1,
		minSpeedY: 0.1,
		maxSpeedY: 0.1,
		directionX: 'center',
		directionY: 'center',
		density: 10000,
		dotColor: '#fafced',
		lineColor: '#fafced',
		particleRadius: 4,
		lineWidth: .4,
		curvedLines: false,
		proximity: 170,
		parallax: true,
		parallaxMultiplier: 17
  });
};


Template[getTemplate('accountTabs')].rendered = function() {
  $('ul.tabs').tabs();
};
