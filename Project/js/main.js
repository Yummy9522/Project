$(document).ready(function() {
  $('select').niceSelect();
  $('input').each(function() {
	  var $this = $(this)
	  $this.val() ? $this.addClass('active-label') :  $this.removeClass('active-label');
	});

  $('input').change(function() {
	  var $this = $(this);
	  $this.val() ? $this.addClass('active-label') : $this.removeClass('active-label')
	})
  // TEXTAREA AUTO SIZE!
	autosize(document.querySelectorAll('textarea'));

	// Slider for skill
	$(function () {
	  $('.slider').each(function () {

	    var $handleTooltip = $('.slider_balloon', $(this));
	    var scale = $('.slider__scale', $(this));
	    var color = $(this).data('color');
	    var $handle = $('.slider__handle', $(this));

	    $('.slider__body').slider({
	      range: "min",
	      min: 1,
	      max: 5,
	      value: 3,
	      create: function () {
	        $handleTooltip.text($(this).slider('value'));
	      },
	      //: function () {},
	      slide: function (event, ui) {
	        //$handleTooltip.length ? function (ui) {
	        $handleTooltip.text(ui.value);
	    
	        }
	 });
	    
	  });
	});
});
