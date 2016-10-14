// var header = $('.services'),
// 		test = $('#test');
    
// console.log(header.height() + ' высота хедера');

// console.log(test.css('marginTop'));
// console.log(test.height());


$(document).ready(function(){
  $('.slider').slick({
        prevArrow: $('.prev'),
      nextArrow: $('.next'),

  });
  $('.open-popup-link').magnificPopup({type:'inline'});
  $('.open-popup-link').on('click', function(){
  	console.log('dasd');
  })

  var user = detect.parse(navigator.userAgent);
  console.log('CATS = ' + user.browser.family);
});




