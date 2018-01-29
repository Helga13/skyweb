$(document).ready(function () {
  
  'use strict'
  
  // btn hover
//  $('.btn').on('mouseenter', function(){
//    $(this).find('span').css({'transform': 'translateX(0)'})
//  });
//  $('.btn').on('mouseleave', function(){
//    $(this).find('span').css({'transform': 'translateX(100%)'})
//  });
  
  // dropdown menu
  $('.js-dropdown').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('opened').next('.submenu').slideToggle();
  });
  
  // tabs
  $('.tabs_block').each(function () {
    $(this).find('.tab').each(function (i) {
      $(this).on('click', function () {
        $(this).addClass('active').siblings().removeClass('active').closest('.tabs_block').find('.tabs_content').removeClass('active').fadeOut(0).eq(i).fadeIn().addClass('active');
      });
    });
  });
  
  // inputmask
  $('#phone').mask('+375 (99) 999-99-99');
  
  // test
  var steps = $('.testing_block form').children('.step');
  
	$(steps[0]).css({'display': 'inline-block'});
	var current_step = 0; 
	$('.js-next').click(function (e) {
	  e.preventDefault();
	  current_step++; 
	  changeStep(current_step);
	});
  
  function changeStep(i) {
		$(steps).hide();
		$(steps[i]).css({'display': 'inline-block'});
      if(i == 1){
        var siteView = $('.site_view input:checked').attr('value');
        if( siteView == 'goods'){
          $('.visible_step').removeClass('visible');
          $('.basket_step, .for_goods').addClass('visible');
        }
        if( siteView == 'services'){
          $('.visible_step').removeClass('visible');
          $('.size_step, .for_services').addClass('visible');
          $('.additional_functions .hidden, .filling_step .hidden').css({'display': 'none','visibility': 'hidden'});
        }
        if( siteView == 'landing'){
          $('.visible_step').removeClass('visible');
          $('.basket_step').addClass('visible').find('.h2').text('Есть ли у Вас сценарий?');
          $('.step3, .step4').remove();
        }
      }
      if(i == 2){
        var basketStep = $('.step2 input:checked').attr('value');
        var siteView = $('.site_view input:checked').attr('value');
        if( basketStep == 'no'){
          $('.additional_functions .hidden, .filling_step .hidden').css({'display': 'none','visibility': 'hidden'});
        }
        if( siteView == 'landing'){
          $('.step5').css({'display': 'inline-block'});
        }
      }
      if(i == 3){
        var siteView = $('.site_view input:checked').attr('value');
        if( siteView == 'landing'){
          $('.step6').css({'display': 'inline-block'});
        }
      }
      
	}
  
})