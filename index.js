$('.btn__background').on('click', function() {
  $('.container').toggleClass('color');
  $('.btn__background').toggleClass('color');
  $('.sun-box').toggleClass('move');
  $('.moon-box').toggleClass('move');
  
  $('.btn__face').toggleClass('move');
  $('.btn__eye-left, .btn__eye-right').toggleClass(function(){
    return $(this).is('.open, .close') ? 'open close' : 'close';
  });
  $('.btn__mouth').toggleClass('close');
  
  $('.btn__animation').toggleClass(function(){
    return $(this).is('.move-reverse, .move') ? 'move-reverse move' : 'move';
  });
  
});
