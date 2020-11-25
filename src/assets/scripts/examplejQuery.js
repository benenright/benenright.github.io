import $ from './globals';

export function testFunction() {

  $('.streamfield-block').click(function(e) {
      e.preventDefault();
      $('.streamfield-block').removeClass('active');
      $(this).removeClass('collapsed');
      $(this).addClass('active');
      //$('.streamfield-menu').removeClass('active');
      //$('.add').removeClass('hidden');
  });

  $('.btn-collapse').click(function(e) {
      e.preventDefault();
      $('.streamfield-block').removeClass('active');
      $('.streamfield-block').addClass('collapsed');
      $('.add').addClass('guttered');
  });

  $('.btn-expand').click(function(e) {
      e.preventDefault();
      $('.streamfield-block').removeClass('active');
      $('.streamfield-block').removeClass('collapsed');
      $('.add').removeClass('guttered');
  });

  $('.add').click(function(e) {
      e.preventDefault();
      $(this).addClass('hidden');
      $(this).next().addClass('active');
      $('.streamfield-block').removeClass('active');
  });

  $('.streamfield-menu').click(function(e) {
      e.preventDefault();
      $(this).removeClass('active');
      $('.add').removeClass('hidden');
  });

}
