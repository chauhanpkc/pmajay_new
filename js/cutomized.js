//For text size large and small
var currFFZoom = 1;
 var currIEZoom = 100;
  function plus(){
   var step = 0.02;
   currFFZoom += step;
   $('p,h6,.leftnav-con').css('MozTransform','scale(' + currFFZoom + ')');
   var stepie = 2;
   currIEZoom += stepie;
   $('p,h6,.leftnav-con').css('zoom', ' ' + currIEZoom + '%');
 };
 function minus(){
  var step = 0.02;
  currFFZoom -= step;
  $('p,h6,.leftnav-con').css('MozTransform','scale(' + currFFZoom + ')');
  var stepie = 2;
  currIEZoom -= stepie;
  $('p,h6,.leftnav-con').css('zoom', ' ' + currIEZoom + '%');
 };
$(document).ready(function(){
	$("#defaultBtn").click(function(){
		$('p,h6,.leftnav-con').css('zoom', '100%');
	});
});
//For tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
//For Left nav
$(document).ready(function(){
	$(".nav-btn").click(function(){
	$(".leftnav-con").toggle();
    $(".leftnav-wrap").toggleClass("col-sm-4 col-md-4 col-lg-3 col-xl-2");
    $(".right-sec").toggleClass("col-sm-8 col-md-8 col-lg-9 col-xl-10");
    $(".submenu").toggleClass("submenu-sm");
    $(".submenu li a").toggleClass("leftnav");
	})
});
var mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
  $(document).ready(function(){
    $(".nav-btn").trigger('click');
  });
};
//For back to top
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 200) {
    $('.back-top').show();
  } else {
    $('.back-top').hide();
  }
});
//datepicker
$(function () {
  $(".datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true,
        format: "dd-mm-yyyy",
  }); 
});