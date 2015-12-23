$(document).foundation();

$(function() {
    $('.nav-toggle').click(function() {
          $('body').toggleClass('show-nav');
          return false;
    });
});
