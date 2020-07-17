(function ($) {

  "use strict";

  // var fullHeight = function () {

  //   $('.js-fullheight').css('height', $(window).height());
  //   $(window).resize(function () {
  //     $('.js-fullheight').css('height', $(window).height());
  //   });

  // };
  // fullHeight();



//Code To Toggle Side Menubar
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });


  //Code to copy Hex code and show copied message
  $('.palette_body').click(function () {
    var input = $("<input>");
    var color = $(this).children(".color-hex").text();
    $('body').append(input);
    input.val(color).select();
    document.execCommand('copy');
    input.remove();
    $('.copied').fadeIn().delay(2000).fadeOut();
  });

})(jQuery);

//Code below is used to store Hex Code in an array an append it in HTML using DOM selector.

const divs = document.querySelectorAll('.palette_body');
const spans = document.querySelectorAll('.color_code');

const colors = [
  '#a7ff83',
  '#17b978',
  '#086972',
  '#071a52',
  '#fc5185',
  '#364f6b',
  '#43dde6',
  '#f0f0f0',
  '#303481',
  '#d6e6f2',
  '#f5f5f5',
  '#fff200',
  '#05386b',
  '#5cdb95',
  '#8EE4af',
  '#edf5e1',
  '#581b98',
  '#9c1de7',
  '#f3558e',
  '#faee1c',
  '#3959a2',
  '#a8dbd2',
  '#16181e',
  '#ededf1',
  '#641652',
  '#ff9e0f',
  '#ff553e',
  '#341b30',
  '#35c5cf',
  '#d8eff5',
  '#81c9f3',
  '#ededf1',
  '#e8e2db',
  '#fab95b',
  '#f5564e',
  '#1a3263'
];

for (let i in divs) {
  divs[i].style.background = colors[i];
  spans[i].innerHTML = colors[i];
};
