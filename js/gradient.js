 //Code to copy Hex code and show copied message
 $('.gradient_body').click(function () {
     var input = $("<input>");
     var color = $(this).children(".color-hex").text();
     $('body').append(input);
     input.val(color).select();
     document.execCommand('copy');
     input.remove();
     $('.copied').fadeIn().delay(2000).fadeOut();
 });

 const gradient_divs = document.querySelectorAll('.gradient_body');
 const gradient_spans = document.querySelectorAll('.color_code');

 const myGradients = [
     'linear-gradient(to right, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89))',
     'linear-gradient(to right, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89))',
     'linear-gradient(to right, rgb(185, 43, 39), rgb(21, 101, 192))',
     'linear-gradient(to right, rgb(55, 59, 68), rgb(66, 134, 244))',
     'linear-gradient(to right, #fc67fa, #f4c4f3)',
     'linear-gradient(to right, #00c3ff, #ffff1c)',
     'linear-gradient(to right, #ff00cc, #333399)',
     'linear-gradient(to right, #de6161, #2657eb)'
 ];

 for (let i in gradient_divs) {
     gradient_divs[i].style.background = myGradients[i];
     gradient_spans[i].innerHTML = myGradients[i];
 };