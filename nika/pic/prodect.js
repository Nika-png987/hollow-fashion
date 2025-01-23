$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var cloth = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + cloth + ']').addClass('active');
      $(this).addClass('active');
  });

});
