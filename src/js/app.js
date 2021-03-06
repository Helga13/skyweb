$(document).ready(function () {
  'use strict';
  // dropdown menu
  $('.js-dropdown').on('click', function (e) {
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
  var steps = $('.testing_block form').children('.step'),
    current_step = 0;
  $(steps[0]).css({
    'display': 'inline-block'
  });

  function changeStep(i) {
    $(steps).hide();
    $(steps[i]).css({
      'display': 'inline-block'
    });
    if (i === 1) {
      var siteView = $('.site_view input:checked').attr('value');
      if (siteView === 'goods') {
        $('.visible_step').removeClass('visible');
        $('.basket_step, .for_goods').addClass('visible');
      }
      if (siteView === 'services') {
        $('.visible_step').removeClass('visible');
        $('.size_step, .for_services').addClass('visible');
        $('.additional_functions .hidden, .filling_step .hidden').css({'display': 'none', 'visibility': 'hidden'});
      }
      if (siteView === 'landing') {
        $('.visible_step').removeClass('visible');
        $('.basket_step').addClass('visible').find('.h2').text('Есть ли у Вас сценарий?');
        $('.step3, .step4').remove();
      }
    }
    if (i === 2) {
      var basketStep = $('.step2 input:checked').attr('value'),
        siteView = $('.site_view input:checked').attr('value');
      if (basketStep === 'no') {
        $('.additional_functions .hidden, .filling_step .hidden').css({'display': 'none', 'visibility': 'hidden'});
      }
      if (siteView === 'landing') {
        $('.step5').css({
          'display': 'inline-block'
        });
      }
    }
    if (i === 3) {
      var siteView = $('.site_view input:checked').attr('value');
      if (siteView === 'landing') {
        $('.step6').css({
          'display': 'inline-block'
        });
      }
    }
  }
  
  $('.js-next').click(function (e) {
    e.preventDefault();
    current_step++;
    changeStep(current_step);
  });
  // show more
  $('.js-show_more').on('click', function () {
    $(this).parents('.row').next('.add_context').slideToggle();
  });
  // popup
  $('.js-popup').click(function (e) {
    e.preventDefault();
    $('#feedback_form').fadeIn(300);
    $('body').css('overflow', 'hidden');
  });
  $('.popup_overlay').click(function (e) {
    $(this).fadeOut(100);
    $('body').css('overflow', 'auto');
  });
  $('.popup_close').click(function (e) {
    e.preventDefault();
    $(this).parents('.popup_overlay').fadeOut(100);
    $('body').css('overflow', 'auto');
  });
  $('.popup_content').click(function (e) {
    e.stopPropagation();
  });
  // menu
  $('.js-burger').on('click', function () {
    $(this).next('.nav_wrap').addClass('is-show');
    $('body').css({
      'overflow': 'hidden'
    });
    $('.nav_wrap_inner').mCustomScrollbar();
  });
  $('.js-nav_close').on('click', function (e) {
    e.preventDefault();
    $(this).parent('.nav_wrap').removeClass('is-show');
    $('body').css({
      'overflow': 'auto'
    });
    $('.nav_wrap_inner').mCustomScrollbar('destroy');
  });
  $('.js-nav_overlay').on('click', function () {
    $(this).prev('.nav_wrap').removeClass('is-show');
    $('body').css({
      'overflow': 'auto'
    });
    $('.nav_wrap_inner').mCustomScrollbar('destroy');
  });
  // scrollto
  $('.js-scrollto').click(function (e) {
    e.preventDefault();
    var elementClick = $(this).data('href'),
      destination = $(elementClick).offset().top;
    $('html:not(:animated),body:not(:animated)').animate({
      scrollTop: destination
    }, 1100);
  });
});
if (document.querySelector('.js-fixed_block')) {
  (function () {
    'use strict';
    var a = document.querySelector('.js-fixed_block'),
      b = null,
      P = 0;
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);

    function Ascroll() {
      if (b == null) {
        var Sa = getComputedStyle(a, ''),
          s = '';
        for (var i = 0; i < Sa.length; i++) {
          if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
            s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
          }
        }
        b = document.createElement('div');
        b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
        a.insertBefore(b, a.firstChild);
        var l = a.childNodes.length;
        for (var i = 1; i < l; i++) {
          b.appendChild(a.childNodes[1]);
        }
        a.style.height = b.getBoundingClientRect().height + 'px';
        a.style.padding = '0';
        a.style.border = '0';
      }
      var Ra = a.getBoundingClientRect()
        , R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.end_fix').getBoundingClientRect().top + 0); // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
      if ((Ra.top - P) <= 0) {
        if ((Ra.top - P) <= R) {
          b.className = 'stop';
          b.style.top = -R + 'px';
        }
        else {
          b.className = 'sticky';
          b.style.top = P + 'px';
        }
      }
      else {
        b.className = '';
        b.style.top = '';
      }
      window.addEventListener('resize', function () {
        a.children[0].style.width = getComputedStyle(a, '').width
      }, false);
    }
    if (window.matchMedia("(max-width: 992px)").matches) {
      window.removeEventListener('scroll', Ascroll, false);
      document.body.removeEventListener('scroll', Ascroll, false);
    }
  })()
}