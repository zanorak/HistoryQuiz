$(document).ready(function(){
  $('.card').hide();
  $('#cards>div').eq(0).show();
  $(".card").flip();

  // https://stackoverflow.com/questions/28535226/javascript-how-to-show-the-next-div-and-hide-the-previous-one
  $('#next').on('click', function() {
    $('#cards>div').each(function() {
      var id = $(this).index();
      if ($(this).is(':visible')) {
        $(this).hide();
        if (id == $('#cards>div').length - 1) {
          $('#cards>div').eq(0).show();
        } else {
          $('#cards>div').eq(id + 1).show();
        }
        return false;
      }
    });
  });

});
